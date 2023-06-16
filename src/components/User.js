import React from "react";

const User = ({ username, onUserClick, userId }) => {
  return (
    <div
      style={{
        margin: 6,
        padding: 12,
        backgroundColor: "aliceblue",
        borderWidth: 2,
        borderColor: "black"
      }}
      onClick={() => onUserClick(userId)}
    >
      <span>{username}</span>
    </div>
  );
};

export default User;
