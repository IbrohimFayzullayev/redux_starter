import React from "react";
import ReactDOM from "react-dom";
import {
  compose,
  bindActionCreators,
  applyMiddleware,
  createStore,
} from "redux";
// import App from "./App";

function Render() {
  const salom = (string) => string.toUpperCase();
  const hello = (string) => string.repeat(3);
  const str = (string) => string.toLowerCase();
  const mix = str(hello(salom("Ibrohim")));
  const mixWithCompose = compose(salom, hello, str);
  return (
    <div>
      {mix}
      {mixWithCompose("Ibrohim")}
    </div>
  );
}

ReactDOM.render(<Render />, document.querySelector("#root"));
