import React from "react";
import Description from "./Components/Description";
import Navbar from "./Components/Navbar";
import Slide from "./Components/Slide";

function App() {
  return (
    <div className=" bg-softblue text-cardbg">
      <Navbar fillColor="#69707D" />
      <Slide />
      <Description fillColor="#FFFFFF" />
    </div>
  );
}

export default App;