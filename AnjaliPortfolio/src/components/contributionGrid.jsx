// import React from "react";
// // import { GITHUB_COLORS } from "../constants/githubColors";
// import { GITHUB_COLORS } from "./githubColors";
// import { getGithubContributions } from "../utils/api";

// const [streaks, setStreaks] = useState({ current: 0, longest: 0 });
// const [weeklyTotals, setWeeklyTotals] = useState([]);
// useEffect(() => {
//   getGithubProfile(username).then(setUser);

//   getGithubContributions(username).then((weeks) => {
//     const { current, longest } = calculateStreaks(weeks);
//     const weekly = calculateWeeklyTotals(weeks);

//     setStreaks({ current, longest });
//     setWeeklyTotals(weekly);
//   });
// }, [username]);
// const calculateStreaks = (weeks) => {
//   let current = 0;
//   let longest = 0;

//   const days = weeks.flatMap(w => w.days);

//   for (let i = 0; i < days.length; i++) {
//     if (days[i].count > 0) {
//       current++;
//       longest = Math.max(longest, current);
//     } else {
//       current = 0;
//     }
//   }

//   return { current, longest };
// };
// const calculateWeeklyTotals = (weeks) => {
//   return weeks.map((week) =>
//     week.days.reduce((total, d) => total + d.count, 0)
//   );
// };


// function ContributionGrid({ contributions }) {
//   return (
//     <div className="grid grid-cols-53 gap-[3px]">
//       {contributions.map((day, index) => {
//         const level = day.level; // 0–4
//         return (
//           <div
//             key={index}
//             className="w-3 h-3 rounded-sm"
//             style={{ background: GITHUB_COLORS[level] }}
//           />
//         );
//       })}
//       <div className="flex gap-6 mt-4 text-white text-sm">
//   <p>🔥 Current Streak: {streaks.current} days</p>
//   <p>🏆 Longest Streak: {streaks.longest} days</p>
// </div>

// <div className="mt-4">
//   <h3 className="text-gray-300 text-sm mb-2">Weekly Totals</h3>
//   <div className="flex gap-3">
//     {weeklyTotals.map((w, i) => (
//       <div
//         key={i}
//         className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white"
//       >
//         {w}
//       </div>
//     ))}
//   </div>
// </div>

//     </div>
    
//   );
// }

// export default ContributionGrid;



import { useEffect, useState } from "react";
// import { getGithubContributions } from "../utils/api";
import { getGithubContributions } from "../utils/api";
import { GITHUB_COLORS } from "./githubColors";

const ContributionGrid = ({ username }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getGithubContributions(username).then((res) => {
      setData(res.contributions);
    });
  }, [username]);

  if (!data.length) {
    return <p className="text-gray-400">Loading contributions...</p>;
  }

  return (
    <div className="grid grid-cols-53 gap-1">
      {data.map((day) => (
        <div
          key={day.date}
          className="w-3 h-3 rounded-sm transition-all duration-200"
          style={{ background: GITHUB_COLORS[day.level] }}
          title={`${day.count} contributions on ${new Date(day.date).toDateString()}`}
        ></div>
      ))}
    </div>
  );
};

export default ContributionGrid;

