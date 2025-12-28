
import { useEffect, useState } from "react";
import { getGithubContributions } from "../utils/api";

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
          className="w-3 h-3 rounded-sm"
          style={{ backgroundColor: day.color }}
          title={`${day.count} contributions on ${new Date(day.date).toDateString()}`}
        />
      ))}
    </div>
  );
};

export default ContributionGrid;
