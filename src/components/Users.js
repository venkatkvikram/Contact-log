import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import User from "./User";
import { UsersContext } from "../utils";

// API URL: https://randomuser.me/api/?limit=10
const apiUrl = "https://e0e5-45-112-29-235.ngrok-free.app/v1/getRandomUsers";

const Users = () => {
  const [isLoading, setLoader] = useState(true);

  const { users, setUsers } = useContext(UsersContext);

  const navigate = useNavigate();

  //get list of users api
  const getUsers = async () => {
    const results = await (await fetch(apiUrl)).json();
    if (results.data.length) {
      setLoader(false);
      setUsers(results.data);
      // localStorage.setItem('users', results.data); **** set UsersList data here ***
    }
    console.log({ results });
  };

  const showUserInfo = (id) => {
    navigate(`/user-details/${id}`);
  };

  const enterDetails = () => {
    navigate(`/add-user-info`);
  };

  useEffect(() => {
    //used to fetch the API and feed it to frontend while loading
    getUsers();
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  const renderUsers = () => {
    // use localStorage users list instead localState users here
    return users.map((userItem, index) => {
      const username = userItem?.name?.first + userItem?.name?.last;
      return (
        <User 
          username={username}
          key={index}
          onUserClick={showUserInfo}
          userId={userItem.login.uuid}
        />
      );
    });
  };

  return (
    <div>
      <h1>Users List({users.length})</h1>
      {renderUsers()}
      <button onClick={enterDetails}>Add user</button>
    </div>
  );
}

export default Users;
