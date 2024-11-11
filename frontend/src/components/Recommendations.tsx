import React from "react";

interface Recommendation {
  name: string;
  category: string;
  average_cost: number;
  activities: string[];
}
interface RecommendationsProps {
  recommendations: Recommendation[];
}
const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Recommended Destinations</h2>
      <ul className="mt-4 space-y-4">
        {recommendations.map((rec, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{rec.name}</h3>
            <p>Category: {rec.category}</p>
            <p>Average Cost: ${rec.average_cost}</p>
            <p>Activities: {rec.activities.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
