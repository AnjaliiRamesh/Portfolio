const fetch = require("node-fetch");

// ------------------ HELPER: STREAK CALCULATION ------------------
function calculateStreaks(weeks) {
  let currentStreak = 0;
  let longestStreak = 0;
  let maxStreak = 0;

  // Flatten all days into a single array
  const allDays = weeks.flatMap((week) => week.days);

  // Current streak (counting backwards from today)
  for (let i = allDays.length - 1; i >= 0; i--) {
    if (allDays[i].count > 0) currentStreak++;
    else break;
  }

  // Longest streak
  for (let i = 0; i < allDays.length; i++) {
    if (allDays[i].count > 0) {
      maxStreak++;
      longestStreak = Math.max(longestStreak, maxStreak);
    } else {
      maxStreak = 0;
    }
  }

  return { currentStreak, longestStreak };
}

// ------------------ PROFILE API ------------------
exports.getGithubProfile = async (req, res) => {
  const username = req.params.username;

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const data = await userRes.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profile" });
  }
};

// ------------------ CONTRIBUTIONS API ------------------
exports.getGithubContributions = async (req, res) => {
  const username = req.params.username;

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const githubRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    const json = await githubRes.json();

    const weeks =
      json.data?.user?.contributionsCollection?.contributionCalendar?.weeks ||
      [];

    // ------------------ FORMAT DATA ------------------
    const formatted = weeks.map((week) => ({
      total: week.contributionDays.reduce(
        (sum, d) => sum + d.contributionCount,
        0
      ),
      days: week.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
        color: d.color,
        level:
          d.contributionCount === 0
            ? 0
            : d.contributionCount < 3
            ? 1
            : d.contributionCount < 6
            ? 2
            : d.contributionCount < 10
            ? 3
            : 4,
      })),
    }));

    // ------------------ STREAKS ------------------
    const streaks = calculateStreaks(formatted);

    // ------------------ FINAL RESPONSE ------------------
    res.json({
      weeks: formatted,
      streaks,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch contributions" });
  }
};
