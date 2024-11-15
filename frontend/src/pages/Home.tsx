import React, { useState } from "react";
import PreferenceForm from "../components/PreferenceForm";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

interface FormData {
  budget: number;
  interests: string;
  season: string;
}

interface Recommendation {
  id: string; // Make sure this aligns with your API response
  name: string;
  category: string;
  average_cost: number;
  activities: string[];
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchRecommendations = async (formData: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/destinations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations.");
      }

      const recommendationsData = await response.json();
      const recommendations = recommendationsData.recommendations;

      // Navigate to Results page with recommendations as state
      navigate("/results", { state: { recommendations } });
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 px-[20%]">
        <PreferenceForm onSubmit={fetchRecommendations} />
        {loading && <p>Loading recommendations...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>
    </>
  );
};

export default Home;
