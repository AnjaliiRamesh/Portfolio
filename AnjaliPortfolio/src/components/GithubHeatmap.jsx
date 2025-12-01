


// import { useEffect, useState } from "react";
// import { getGithubContributions } from "../utils/api";

// const GithubHeatmap = ({ username }) => {
//   const [weeks, setWeeks] = useState([]);

//   useEffect(() => {
//     getGithubContributions(username).then(data => {
//       setWeeks(data.contributions || []);
//     });
//   }, [username]);

//   const levelToColor = (level) => ({
//     0: "bg-gray-200 dark:bg-gray-700",
//     1: "bg-green-200 dark:bg-green-900",
//     2: "bg-green-300 dark:bg-green-700",
//     3: "bg-green-500 dark:bg-green-600",
//     4: "bg-green-700 dark:bg-green-400"
//   }[level] || "bg-gray-200");

//   return (
//     <div className="p-6 rounded-xl shadow-md bg-white dark:bg-[#1e1e1e] mt-8 transition-colors">
//       <h2 className="text-2xl font-bold mb-4 dark:text-white">GitHub Contributions</h2>
//       <div className="grid grid-cols-53 gap-1">
//         {weeks?.flatMap(week => week.days || [])?.map((day, idx) => (
//           <div
//             key={idx}
//             title={`${day.count || 0} contributions`}
//             className={`w-3 h-3 rounded-sm ${levelToColor(day.level || 0)}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GithubHeatmap;


import { useEffect, useState } from "react";
import { getGithubContributions } from "../utils/api";

const GithubHeatmap = ({ username }) => {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    getGithubContributions(username).then(data => {
      setWeeks(data.contributions || []);
    });
  }, [username]);

  const levelToColor = (level) => ({
    0: "bg-gray-200/50 dark:bg-gray-700/50",
    1: "bg-green-200/50 dark:bg-green-900/50",
    2: "bg-green-300/50 dark:bg-green-700/50",
    3: "bg-green-500/50 dark:bg-green-600/50",
    4: "bg-green-700/50 dark:bg-green-400/50"
  }[level] || "bg-gray-200/50");

  return (
    <div className="p-6 rounded-xl shadow-md bg-white/10 dark:bg-[#1e1e1e]/20 backdrop-blur-md border border-white/20 dark:border-gray-700/30 mt-8 transition-colors relative overflow-hidden">
      {/* Background Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div> */}

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-400">GitHub Contributions</h2>
        <div className="grid grid-cols-53 gap-1">
          {weeks?.flatMap(week => week.days || [])?.map((day, idx) => (
            <div
              key={idx}
              title={`${day.count || 0} contributions`}
              className={`w-3 h-3 rounded-sm ${levelToColor(day.level || 0)}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubHeatmap;
