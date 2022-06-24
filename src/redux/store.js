import { createStore } from "redux";
import reducers, { intialState } from "./reducers/reducer";

const store = createStore(reducers, intialState);

export default store;
