import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ username, onUserClick, userId }) => {
  const navigation = useNavigate();

  const onDeleteUser = (id) => {
    const usersList = localStorage.getItem(`users`);
    const parsedData = JSON.parse(usersList);
    console.log("parsedData", parsedData);
    const filteredData = parsedData.filter((item) => item.id !== id);
    localStorage.setItem("users", JSON.stringify(filteredData));
    console.log("filteredconsole", filteredData);
    navigation("/");
  };

  const onEditUser = (id) => {
    navigation(`/edit-user-info/${userId}`)
  }

  return (
    <div
      style={{
        margin: "5px auto",
        padding: 12,
        backgroundColor: "#fff685",
        border: "2px solid black",
        width: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span onClick={() => onUserClick(userId)}>{username}</span>
      <button onClick={() => onDeleteUser(userId)}>Delete user</button>
      <button onClick={() => onEditUser(userId)}>Edit user</button>
    </div>
  );
};

export default User;
