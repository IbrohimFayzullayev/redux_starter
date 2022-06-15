import { createStore } from "redux";
import { intialState, reducer } from "./reducers/counterReducer";

const store = createStore(reducer, intialState);

export default store;
