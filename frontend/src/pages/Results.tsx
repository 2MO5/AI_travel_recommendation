import React from "react";
import Navbar from "../components/Navbar";

type Destination = {
  name: string;
  description: string;
  budget: number;
  attractions: string[];
  bestTime: string;
};

interface ResultsPageProps {
  recommendations: Destination[];
}

const Results: React.FC<ResultsPageProps> = ({ recommendations }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 px-[10%]">
        <h1 className="text-4xl font-black py-10">
          Your Travel Recommendations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((destination, index) => (
            <div
              key={index}
              className="py-10 px-14 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold">{destination.name}</h2>
              <p className="text-sm text-gray-600">{destination.description}</p>
              <p className="text-md font-medium mt-5">
                Budget: ${destination.budget}
              </p>
              <p className="text-sm">
                Best Time to Visit: {destination.bestTime}
              </p>

              <h3 className="text-sm font-semibold mt-5">Top Attractions:</h3>
              <ul className="list-disc list-inside text-sm">
                {destination.attractions.map((attraction, i) => (
                  <li key={i}>{attraction}</li>
                ))}
              </ul>

              <button className="mt-8 bg-green-600 text-white py-2 px-6 py-2 rounded">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Results;
