import React, { useState, useEffect } from "react";
import "./selectCountry.css";

let arr = [
  { name: "USA", id: 1 },
  { name: "UZBEKISTAN", id: 2 },
  { name: "RUSSIAN", id: 3 },
  { name: "SPAIN", id: 4 },
];

function SelectCountry(props) {
  const [country, setCountry] = useState("USA");
  useEffect(() => {
    props.getName(country);
  });
  return (
    <div className="countries">
      {arr.map((val) => {
        return (
          <div
            key={val.id}
            onClick={() => setCountry(val.name)}
            className="country"
          >
            {val.name}
          </div>
        );
      })}
    </div>
  );
}

export default SelectCountry;
