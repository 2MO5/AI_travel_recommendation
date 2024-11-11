// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-green-600 p-4 text-white px-[20%]">
        {/* <Link to="/"> */}
        <h1 className="text-xl font-bold">TravelAI</h1>
        {/* </Link> */}
      </nav>
    </>
  );
};

export default Navbar;
