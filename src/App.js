import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Plant from "./Components/Planets";
import People from "./Components/People";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  const [planet, setPlanet] = useState("planet");
  return (
    <>
      <div className="App">
        <h2>Star wars info</h2>
        <Navbar setPlanet={setPlanet} />
        <div className="context">
          {planet === "planet" ? <Plant /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App;
