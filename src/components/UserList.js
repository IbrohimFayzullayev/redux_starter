import React from "react";

const UserList = (props) => {
  console.log(props);
  const a = props.users.length ? "none" : "block";

  const renderHtml = () => {
    if (!props.users.length) {
      return;
    }
    return props.users[0].data.map((val) => {
      return (
        <div key={val.id}>
          <h1>{val.name}</h1>
          <h4>{val.username}</h4>
        </div>
      );
    });
  };
  return (
    <div>
      <button
        style={{ display: a }}
        onClick={() => {
          props.getDataAction();
        }}
      >
        Start
      </button>
      {renderHtml()}
    </div>
  );
};

export default UserList;
