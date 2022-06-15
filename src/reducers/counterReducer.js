import { DECREMENT, INCREMENT, RESET } from "../actions/counterAction";

export const intialState = { count: 0 };

export const reducer = (state = intialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  } else if (action.type === RESET) {
    return { count: 0 };
  }
  return state;
};
