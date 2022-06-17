import React from "react";
// import UserList from "./UserList";
import PostList from "./PostList";
import UserListContainer from "../redux/containers/UserListContainer";

const App = () => {
  return (
    <div className="app">
      <UserListContainer />
      <PostList />
    </div>
  );
};

export default App;
