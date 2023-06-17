import React from "react";
import User from "./User";

const Users = ({ users, onUserClick }) => {
  const renderUsers = () => {
    return users.map((userItem, index) => {
      const username = userItem?.name?.first + userItem?.name?.last;
      return (
        <User 
          username={username}
          key={index}
          onUserClick={onUserClick}
          userId={userItem.login.uuid}
        />
      );
    });
  };

  return renderUsers();
};

export default Users;
