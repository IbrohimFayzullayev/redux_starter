import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementAction,
  decrementAction,
  resetAction,
} from "../actions/counterAction";

const ButtonCounter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(incrementAction());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(resetAction());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(decrementAction());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default ButtonCounter;
