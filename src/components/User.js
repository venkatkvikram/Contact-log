import React from "react";

const User = ({ username, onUserClick, userId }) => {
  return (
    <div
      style={{
        margin: "5px auto",
        padding: 12,
        backgroundColor: "#fff685",
        border: "2px solid black",
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

      }}
      onClick={() => onUserClick(userId)}
    >
      <span>{username} - {userId}</span>
    </div>
  );
};

export default User;
