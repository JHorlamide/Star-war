import React from "react";

const Navbar = ({ setPlanet }) => {
  return (
    <nav>
      <button onClick={() => setPlanet("planet")}>Planet</button>
      <button onClick={() => setPlanet("people")}>People</button>
    </nav>
  );
};

export default Navbar;
