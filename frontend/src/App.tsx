// src/App.tsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Results from "./pages/Results";
const App: React.FC = () => {
  const [recommendations, setRecommendations] = useState([
    {
      name: "Paris, France",
      description:
        "The city of light, known for its art, fashion, and culture.",
      budget: 1500,
      attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
      bestTime: "Spring and Fall",
    },
    {
      name: "Kyoto, Japan",
      description:
        "Famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
      budget: 1200,
      attractions: [
        "Kiyomizu-dera",
        "Fushimi Inari-taisha",
        "Arashiyama Bamboo Grove",
      ],
      bestTime: "Spring and Autumn",
    },
    {
      name: "Paris",
      description: "The City of Light awaits with its historic charm.",
      budget: 1500,
      attractions: ["Eiffel Tower", "Louvre Museum", "Seine River"],
      bestTime: "April to June",
    },
    {
      name: "Colombo, Sri Lanka",
      description:
        "A vibrant city with a rich cultural history and stunning beaches.",
      budget: 800,
      attractions: [
        "Galle Face Green",
        "Gangaramaya Temple",
        "Colombo National Museum",
      ],
      bestTime: "November to April",
    },
    {
      name: "Kandy, Sri Lanka",
      description:
        "A cultural heartland with scenic landscapes and ancient temples.",
      budget: 500,
      attractions: [
        "Temple of the Tooth",
        "Kandy Lake",
        "Royal Botanical Gardens",
      ],
      bestTime: "December to April",
    },
    {
      name: "Sigiriya, Sri Lanka",
      description:
        "An ancient rock fortress with historical significance and breathtaking views.",
      budget: 600,
      attractions: [
        "Sigiriya Rock Fortress",
        "Pidurangala Rock",
        "Dambulla Cave Temple",
      ],
      bestTime: "May to September",
    },
    {
      name: "Rome, Italy",
      description: "The Eternal City, rich in history, art, and architecture.",
      budget: 1200,
      attractions: ["Colosseum", "Vatican Museums", "Pantheon"],
      bestTime: "April to June",
    },
    {
      name: "Barcelona, Spain",
      description:
        "A city of artistic flair, stunning architecture, and beautiful beaches.",
      budget: 1100,
      attractions: ["Sagrada Familia", "Park Güell", "La Rambla"],
      bestTime: "May to October",
    },
    {
      name: "Amsterdam, Netherlands",
      description:
        "A city of picturesque canals, museums, and vibrant nightlife.",
      budget: 1000,
      attractions: ["Rijksmuseum", "Anne Frank House", "Van Gogh Museum"],
      bestTime: "April to May",
    },
  ]);

  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Results route, passing recommendations as props */}
          <Route
            path="/results"
            element={<Results recommendations={recommendations} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
