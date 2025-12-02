

import { useEffect, useState } from "react";
import { getGithubProfile } from "../utils/api";

const GithubStats = ({ username }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getGithubProfile(username).then(setProfile);
  }, [username]);

  if (!profile) return <p>Loading GitHub Profile...</p>;

  return (
    // <div className="p-6 rounded-xl shadow-md bg-white/10 dark:bg-[#1e1e1e]/20 backdrop-blur-md border border-white dark:border-gray-700/30 mt-8 transition-colors relative overflow-hidden">
      <div className="p-6 rounded-xl shadow-md bg-white/3 dark:bg-[#0c0d10]/50 backdrop-blur-md border border-white/8 mt-8 relative">
      {/* Background Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div> */}

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-400">GitHub Profile</h2>
        <div className="flex items-center gap-4">
          <img
            src={profile.avatar_url}
            alt="avatar"
            className="w-16 h-16 rounded-full border-2  border-gray-300 dark:border-gray-700 bg-transparent "
          />
          <div>
            <p className="text-xl font-semibold text-gray-400">{profile.name}</p>
            <a
              href={profile.html_url}
              className="text-blue-600 dark:text-blue-300 underline"
              target="_blank"
            >
              @{profile.login}
            </a>
          </div>
        </div>
        <div className="mt-4 flex gap-6 dark:text-gray-300">
          <p>Repos: {profile.public_repos}</p>
          <p>Followers: {profile.followers}</p>
          <p>Following: {profile.following}</p>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
