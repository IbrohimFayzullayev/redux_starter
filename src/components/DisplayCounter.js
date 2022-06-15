import React from "react";
import { useSelector } from "react-redux/es/exports";

const DisplayCounter = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default DisplayCounter;
