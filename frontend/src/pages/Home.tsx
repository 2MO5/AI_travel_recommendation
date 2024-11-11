import React, { useState } from "react";
import PreferenceForm from "../components/PreferenceForm";
import Recommendations from "../components/Recommendations";

interface FormData {
  budget: number;
  interests: string;
  season: string;
}
interface Recommendation {
  name: string;
  category: string;
  average_cost: number;
  activities: string[];
}

const Home: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const fetchRecommendations = async (formData: FormData) => {
    try {
      const response = await fetch("http://localhost:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const recommendationsData = await response.json();
      setRecommendations(recommendationsData.recommendations);
    } catch (error) {
      console.log("error fetching recommendations: ", error);
    }
  };

  return (
    <div className="p-4">
      <PreferenceForm onSubmit={fetchRecommendations} />
      {recommendations.length > 0 && (
        <Recommendations recommendations={recommendations} />
      )}
    </div>
  );
};

export default Home;
