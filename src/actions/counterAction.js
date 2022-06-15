export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
const incrementAction = () => {
  return { type: INCREMENT };
};

const decrementAction = () => {
  return { type: DECREMENT };
};

const resetAction = () => {
  return { type: RESET };
};

export { decrementAction, incrementAction, resetAction };
