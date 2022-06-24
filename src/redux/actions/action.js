export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

const signInAction = (id, name, img) => {
  return {
    type: SIGN_IN,
    payload: {
      id,
      name,
      img,
    },
  };
};
const signOutAction = () => {
  return {
    type: SIGN_OUT,
  };
};

export { signInAction, signOutAction };
