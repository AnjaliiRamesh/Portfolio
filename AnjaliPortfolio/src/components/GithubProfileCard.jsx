// import { useEffect, useState } from "react";
// import { getGithubProfile } from "../utils/api";

// const GithubProfileCard = ({ username }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     getGithubProfile(username).then(setUser);
//   }, [username]);

//   if (!user) return null;

//   return (
//     <div className="flex items-center gap-4 p-6 rounded-xl bg-[#0d1117] border border-white/10">
//       <img
//         src={user.avatar_url}
//         alt="avatar"
//         className="w-20 h-20 rounded-full border border-white/10"
//       />
//       <div>
//         <h2 className="text-white text-xl font-bold">{user.name}</h2>
//         <p className="text-gray-400">{user.bio}</p>

//         <div className="flex gap-6 mt-3 text-gray-400 text-sm">
//           <p>Repos: {user.public_repos}</p>
//           <p>Followers: {user.followers}</p>
//           <p>Following: {user.following}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GithubProfileCard;
