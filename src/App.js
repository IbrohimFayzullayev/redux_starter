import React, { useState } from "react";
import SelectCountry from "./components/SelectCountry";
import WorldCup from "./components/WorldCup";
function App() {
  const [chempion, setChempion] = useState("");
  function getCountry(name) {
    setChempion(name);
  }
  return (
    <div>
      <WorldCup countryName={chempion} />
      <SelectCountry getName={getCountry} />
    </div>
  );
}

export default App;
