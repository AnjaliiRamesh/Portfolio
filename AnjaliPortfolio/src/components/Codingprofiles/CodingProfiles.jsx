// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const CodingProfiles = () => {
//   const [github, setGithub] = useState(null);
//   const [leetcode, setLeetcode] = useState(null);

//   const username = "AnjaliiRamesh"; 
//   const leetcodeUser = "anjaliramesh14012005";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const gh = await axios.get(`http://localhost:5000/api/github/${username}`);
//         const lc = await axios.get(`http://localhost:5000/api/leetcode/${leetcodeUser}`);

//         setGithub(gh.data);
//         setLeetcode(lc.data);
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     fetchData();
//   }, []);

//   const generateHeatmap = () => {
//     const days = 100;
//     const arr = [];

//     for (let i = 0; i < days; i++) {
//       const level = Math.floor(Math.random() * 5);
//       arr.push(level);
//     }
//     return arr;
//   };

//   const heatmap = generateHeatmap();

//   return (
    
//     <section className="w-full px-6 sm:px-20 py-24 text-white" id="profiles">
//       <h2 className="text-4xl font-bold mb-12 text-center">Coding Profiles</h2>

//       <div className="grid md:grid-cols-2 gap-10">

//         {/* GITHUB CARD */}
//         <div className="bg-[#0A0A1A]/80 rounded-3xl p-8 shadow-xl border border-white/10 backdrop-blur-sm">
//           <h3 className="text-2xl font-semibold mb-4">GitHub</h3>

//           {github && (
//             <>
//               <div className="flex items-center gap-4 mb-6">
//                 <img
//                   src={github.avatar_url}
//                   className="w-16 h-16 rounded-full border border-white/20"
//                 />
//                 <div>
//                   <p className="text-xl font-semibold">{github.name}</p>
//                   <p className="text-white/60 text-sm">@{github.login}</p>
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-4 text-center mb-8">
//                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
//                   <p className="text-2xl font-bold">{github.public_repos}</p>
//                   <p className="text-xs text-white/50">Repos</p>
//                 </div>

//                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
//                   <p className="text-2xl font-bold">{github.followers}</p>
//                   <p className="text-xs text-white/50">Followers</p>
//                 </div>

//                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
//                   <p className="text-2xl font-bold">{github.following}</p>
//                   <p className="text-xs text-white/50">Following</p>
//                 </div>
//               </div>

//               {/* Heatmap Placeholder */}
//               <div>
//                 <p className="text-white/70 text-sm mb-3">Contribution Activity</p>
//                 <div className="grid grid-cols-20 gap-[3px]">
//                   {heatmap.map((lvl, i) => (
//                     <div
//                       key={i}
//                       className="w-3 h-3 rounded-sm"
//                       style={{
//                         backgroundColor:
//                           [
//                             "#1a1a2e", // 0
//                             "#233554", // 1
//                             "#3a506b", // 2
//                             "#5bc0be", // 3
//                             "#00f7ff", // 4
//                           ][lvl],
//                       }}
//                     ></div>
//                   ))}
//                 </div>
//               </div>

//             </>
//           )}
//         </div>

//         {/* LEETCODE CARD */}
//         <div className="bg-[#0A0A1A]/80 rounded-3xl p-8 shadow-xl border border-white/10 backdrop-blur-sm">
//           <h3 className="text-2xl font-semibold mb-4">LeetCode</h3>

//           {leetcode && (
//             <>
//               {/* Stats Row */}
//               <div className="grid grid-cols-3 gap-4 text-center mb-8">
//                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
//                   <p className="text-2xl font-bold">{leetcode.totalSolved}</p>
//                   <p className="text-xs text-white/50">Solved</p>
//                 </div>

//                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
//                   <p className="text-2xl font-bold">{leetcode.easySolved}</p>
//                   <p className="text-xs text-white/50">Easy</p>
//                 </div>

//                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
//                   <p className="text-2xl font-bold">{leetcode.mediumSolved}</p>
//                   <p className="text-xs text-white/50">Medium</p>
//                 </div>
//               </div>

//               {/* Heatmap */}
//               <p className="text-white/70 text-sm mb-3">Recent Activity</p>
//               <div className="grid grid-cols-20 gap-[3px]">
//                 {heatmap.map((lvl, i) => (
//                   <div
//                     key={i}
//                     className="w-3 h-3 rounded-sm"
//                     style={{
//                       backgroundColor:
//                         [
//                           "#1a1a2e",
//                           "#402E2A",
//                           "#8B5D4C",
//                           "#DDA15E",
//                           "#FFB703",
//                         ][lvl],
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CodingProfiles;
