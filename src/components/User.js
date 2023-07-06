import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../styles/User.css";

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
    navigation(`/edit-user-info/${userId}`);
  };

  return (
    <div className="user-information">
      <span onClick={() => onUserClick(userId)}>{username}</span>
      <div className="action-icons">
        <button className="action-btn" style={{ marginRight: 10 }} onClick={() => onDeleteUser(userId)}>
          <FontAwesomeIcon className="action-icon" icon={faTrash}/>
        </button>
        <button className="action-btn" onClick={() => onEditUser(userId)}>
          <FontAwesomeIcon className="action-icon" icon={faPenToSquare} />
        </button>
      </div>
    </div>
  );
};

export default User;
