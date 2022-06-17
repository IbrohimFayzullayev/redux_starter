import { GET_DATA, SELECT } from "../actions/action";
export const initial_state = { users: [], id: null, posts: [] };

const reducers = (state = initial_state, action) => {
  if (action.type === GET_DATA) {
    return {
      users: [...state.users, action.payload],
      id: state.id,
      posts: [...state.posts],
    };
  } else if (action.type === SELECT) {
    return {
      users: [...state.users, action.payload],
      id: state.id,
      posts: [...state.posts],
    };
  }
  return state;
};

export default reducers;
