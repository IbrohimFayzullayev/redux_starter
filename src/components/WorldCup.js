import React from "react";
import "./selectCountry.css";

function WorldCup(props) {
  return <div className="selected">{props.countryName}</div>;
}

export default WorldCup;
