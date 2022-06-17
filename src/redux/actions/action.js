import getData from "../../components/Api";

export const GET_DATA = "GET_DATA";
export const SELECT = "SELECT";

export const getDataAction = () => async (dispatch, getState) => {
  const data = await getData("users");

  dispatch({
    type: GET_DATA,
    payload: data,
  });
};

export const selectAction = (id) => {
  return {
    type: SELECT,
    payload: id,
  };
};
