import { SIGN_IN, SIGN_OUT } from "../actions/action";

export const intialState = { id: 0, name: "", img: "", kirganmi: null };

const reducers = (state = intialState, action) => {
  if (action.type === SIGN_IN) {
    return {
      id: action.payload.id,
      name: action.payload.name,
      img: action.payload.img,
      kirganmi: true,
    };
  } else if (action.type === SIGN_OUT) {
    return { ...state, kirganmi: false };
  }
  return state;
};

export default reducers;
