


import { useEffect, useState } from "react";
import { getLeetCodeStats } from "../utils/api";

const Leetstat = ({ username }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getLeetCodeStats(username).then(setStats);
  }, [username]);

  if (!stats) return <p>Loading LeetCode Stats...</p>;

  return (
    // <div className="p-6 rounded-xl shadow-md bg-white/10 dark:bg-[#1e1e1e]/20 backdrop-blur-md border border-white/20 dark:border-gray-700/30 mt-8 transition-colors relative overflow-hidden">
      <div className="p-6 rounded-xl shadow-md bg-white/3 dark:bg-[#0c0d10]/50 backdrop-blur-md border border-white/8 mt-8 relative">
      {/* Background Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div> */}

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-400">LeetCode Stats</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100/30 dark:bg-gray-800 rounded-lg text-center">
            <p className="text-xl font-bold text-gray-400">{stats.totalSolved}</p>
            <p className="text-gray-600 dark:text-gray-400">Total</p>
          </div>
          <div className="p-4 bg-green-100/30 dark:bg-green-900 rounded-lg text-center">
            <p className="text-xl font-bold text-gray-400">{stats.easySolved}</p>
            <p className="text-gray-600 dark:text-gray-400">Easy</p>
          </div>
          <div className="p-4 bg-yellow-100/30 dark:bg-yellow-800 rounded-lg text-center">
            <p className="text-xl font-bold text-gray-400">{stats.mediumSolved}</p>
            <p className="text-gray-600 dark:text-gray-400">Medium</p>
          </div>
          <div className="p-4 bg-red-100/30 dark:bg-red-900 rounded-lg text-center col-span-3 mt-2">
            <p className="text-xl font-bold text-gray-400">{stats.hardSolved}</p>
            <p className="text-gray-600 dark:text-gray-400">Hard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leetstat;
