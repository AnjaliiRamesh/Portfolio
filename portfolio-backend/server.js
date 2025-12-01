import express from "express";
import axios from "axios";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

// ---------------- GITHUB PROFILE ----------------
app.get("/api/github/profile/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "GitHub Profile Fetch Error" });
  }
});

// ---------------- GITHUB HEATMAP ----------------
app.get("/api/github/contributions/:username", async (req, res) => {
  const { username } = req.params;

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const body = await response.json();
    res.json(
      body.data.user.contributionsCollection.contributionCalendar
    );
  } catch (error) {
    res.status(500).json({ message: "GitHub Contributions Fetch Error" });
  }
});

// ---------------- LEETCODE HEATMAP ----------------
app.get("/api/leetcode/heatmap/:username", async (req, res) => {
  const { username } = req.params;

  const query = {
    query: `
      query recentAcSubmissions($username: String!) {
        matchedUser(username: $username) {
          userCalendar {
            submissionCalendar
          }
        }
      }
    `,
    variables: { username }
  };

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });

    const json = await response.json();

    res.json(JSON.parse(json.data.matchedUser.userCalendar.submissionCalendar));
  } catch (error) {
    res.status(500).json({ message: "LeetCode Heatmap Fetch Error" });
  }
});

// ---------------- LEETCODE BASIC STATS ----------------
app.get("/api/leetcode/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const response = await axios.get(
      `https://leetcode-api-faisalshohag.vercel.app/${username}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "LeetCode Fetch Error" });
  }
});

// RUN SERVER
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
