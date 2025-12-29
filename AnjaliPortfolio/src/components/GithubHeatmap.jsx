


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
//     0: "bg-gray-200/50 dark:bg-gray-700/50",
//     1: "bg-green-200/50 dark:bg-green-900/50",
//     2: "bg-green-300/50 dark:bg-green-700/50",
//     3: "bg-green-500/50 dark:bg-green-600/50",
//     4: "bg-green-700/50 dark:bg-green-400/50"
//   }[level] || "bg-gray-200/50");

//   return (
//     <div className="p-6 rounded-xl shadow-md bg-white/10 dark:bg-[#1e1e1e]/20 backdrop-blur-md border border-white/20 dark:border-gray-700/30 mt-8 transition-colors relative overflow-hidden">
//       {/* Background Grid */}
//       {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div> */}

//       <div className="relative z-10">
//         <h2 className="text-2xl font-bold mb-4 text-gray-400">GitHub Contributions</h2>
//         <div className="grid grid-cols-53 gap-1">
//           {weeks?.flatMap(week => week.days || [])?.map((day, idx) => (
//             <div
//               key={idx}
//               title={`${day.count || 0} contributions`}
//               className={`w-3 h-3 rounded-sm ${levelToColor(day.level || 0)}`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GithubHeatmap;


// GithubHeatmap.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { getGithubContributions } from "../utils/api";
import { parseISO, format, getMonth } from "date-fns";
import HeatmapTooltip from "./HeatmapTooltip";

const GIT_DARK_PALETTE = {
  0: "#0f1720",
  1: "#0b3d16",
  2: "#0f5c2d",
  3: "#1f8a3f",
  4: "#26d070",
};

export default function GithubHeatmap({ username }) {
  const [data, setData] = useState({ weeks: [], streaks: { currentStreak:0, longestStreak:0 } });
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: null });
  const containerRef = useRef();

  useEffect(() => {
    if (!username) return;
    let mounted = true;
    async function load() {
      try {
        const res = await getGithubContributions(username);
        // api returns { weeks: [...], streaks: {...} }
        if (mounted) setData(res);
      } catch (err) {
        console.error("Failed to fetch contributions", err);
      }
    }
    load();

    const interval = setInterval(load, 30000); // live reload 30s
    return () => { mounted = false; clearInterval(interval); };
  }, [username]);

  // flatten days in column-major order for 53 columns x 7 rows (GitHub style)
  const columns = useMemo(() => {
    // data.weeks is array of weeks; ideally 53
    const weeks = data.weeks || [];
    // ensure exactly 53 weeks: pad front with empty weeks if necessary
    const padCount = Math.max(0, 53 - weeks.length);
    const padded = Array.from({length: padCount}).concat(weeks); // older weeks first -> latest at end
    // each padded[i] has days (array of 7) ordered Sun..Sat or Mon..Sun depending on GitHub; GraphQL returns Sun..Sat
    return padded;
  }, [data.weeks]);

  // monthly totals
  const monthlyTotals = useMemo(() => {
    const totals = new Array(12).fill(0);
    (data.weeks || []).forEach(week => {
      (week.days || []).forEach(day => {
        const d = parseISO(day.date);
        totals[d.getMonth()] += (day.count || 0);
      });
    });
    return totals;
  }, [data.weeks]);

  const handleMouseEnter = (ev, day) => {
    // compute fixed position of tooltip near cursor
    const x = ev.clientX;
    const y = ev.clientY;
    setTooltip({ visible: true, x, y, data: day });
  };
  const handleMouseMove = (ev, day) => {
    setTooltip(prev => ({ ...prev, x: ev.clientX, y: ev.clientY }));
  };
  const handleMouseLeave = () => setTooltip({ visible: false, x: 0, y: 0, data: null });

  return (
   
    <div className="p-6 rounded-xl shadow-md bg-white/3 dark:bg-[#0c0d10]/50 backdrop-blur-md border border-white/8 mt-8 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-400">GitHub Contributions</h2>
        <div className="text-sm text-gray-300">
          🔥 {data.streaks?.currentStreak ?? 0} &nbsp; • &nbsp; 🏆 {data.streaks?.longestStreak ?? 0}
        </div>
      </div>

      {/* Grid: 53 columns x 7 rows */}
      <div ref={containerRef} className="overflow-x-auto pb-4">
        <div
          className="grid gap-[6px] items-start"
          style={{
            gridTemplateColumns: "repeat(53, 12px)",
            gridAutoRows: "12px",
          }}
        >
          {/** Render column-major: for each week (column) render 7 day squares */}
          {columns.map((week, colIdx) => {
            const days = (week?.days || Array.from({length:7}, (_,i)=>({date:'', count:0, level:0})));
            return days.map((day, rowIdx) => {
              // position key: colIdx*7 + rowIdx
              const key = `${colIdx}-${rowIdx}`;
              const colorFromApi = day.color;
              const level = day.level ?? (day.count ? Math.min(4, Math.ceil(day.count/3)) : 0);
              const bg = colorFromApi || GIT_DARK_PALETTE[level] || GIT_DARK_PALETTE[0];
              return (
                <div
                  key={key}
                  onMouseEnter={(e)=>handleMouseEnter(e, { ...day, date: day.date, count: day.count || 0 })}
                  onMouseMove={(e)=>handleMouseMove(e, { ...day })}
                  onMouseLeave={handleMouseLeave}
                  title={`${day.count || 0} contributions on ${day.date || "N/A"}`}
                  className="rounded-sm transform transition-transform duration-150 hover:scale-125"
                  style={{
                    width: 12,
                    height: 12,
                    background: bg,
                    boxShadow: level === 0 ? "inset 0 0 0 1px rgba(255,255,255,0.03)" : "0 1px 3px rgba(0,0,0,0.35)"
                  }}
                />
              );
            });
          })}
        </div>
      </div>

      {/* legend */}
      <div className="mt-4 flex items-center gap-3 text-sm text-gray-300">
        <span>Less</span>
        <div className="flex gap-1">
          <div style={{width:12,height:12,background:GIT_DARK_PALETTE[0]}} className="rounded-sm border border-white/5"></div>
          <div style={{width:12,height:12,background:GIT_DARK_PALETTE[1]}} className="rounded-sm"></div>
          <div style={{width:12,height:12,background:GIT_DARK_PALETTE[2]}} className="rounded-sm"></div>
          <div style={{width:12,height:12,background:GIT_DARK_PALETTE[3]}} className="rounded-sm"></div>
          <div style={{width:12,height:12,background:GIT_DARK_PALETTE[4]}} className="rounded-sm"></div>
        </div>
        <span>More</span>
      </div>


      {/* Animated tooltip */}
      <HeatmapTooltip visible={tooltip.visible} x={tooltip.x} y={tooltip.y} data={tooltip.data} />
    </div>
    
  );
}
