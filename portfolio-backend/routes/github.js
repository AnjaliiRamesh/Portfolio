// import express from "express";
// import { getGithubContributions } from "../api/github-contributions.js";

// const router = express.Router();

// router.get("/contributions/:username", async (req, res) => {
//   try {
//     const calendar = await getGithubContributions(req.params.username);

//     // Flatten into 1 list
//     const contributions = calendar.weeks.flatMap((week) =>
//       week.contributionDays.map((day) => ({
//         date: day.date,
//         count: day.contributionCount,
//         color: day.color,
//         level: getLevelFromColor(day.color),
//       }))
//     );

//     return res.json({ contributions });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Failed to fetch contributions" });
//   }
// });

// function getLevelFromColor(color) {
//   const map = {
//     "#ebedf0": 0,
//     "#9be9a8": 1,
//     "#40c463": 2,
//     "#30a14e": 3,
//     "#216e39": 4,
//   };
//   return map[color] ?? 0;
// }

// export default router;
