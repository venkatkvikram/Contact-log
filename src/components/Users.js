import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

import User from "./User";
import { UsersContext } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

// API URL: https://randomuser.me/api/?limit=10
const apiUrl = "https://3e8b-45-112-29-230.ngrok-free.app/v1/getRandomUsers";

const Users = () => {
  const [isLoading, setLoader] = useState(false);

  const { users, setUsers } = useContext(UsersContext);

  const navigate = useNavigate();

  const listData = localStorage.getItem("users") || "[]";
  const parsedData = JSON.parse(listData);

  //get list of users api
  const getUsers = async () => {
    const results = await (await fetch(apiUrl)).json();
    if (results.data.length) {
      setLoader(false);
      setUsers(results.data);
      const formattedData = formatUsersData(results.data);
      console.log(formattedData);
      localStorage.setItem("users", JSON.stringify(formattedData)); //set UsersList data here ***
    }
    console.log({ results });
  };

  const showUserInfo = (id) => {
    navigate(`/user-details/${id}`);
  };

  const enterDetails = () => {
    navigate(`/add-user-info`);
  };

  const formatUsersData = (users = []) => {
    return users.map((userItem, index) => {
      return {
        id: index,
        username: `${userItem?.name?.title} ${userItem?.name?.last} ${userItem?.name?.first}`,
        gender: userItem?.gender,
        age: userItem?.dob?.age,
        email: userItem?.email,
        city: userItem?.location?.city,
        mobile: userItem?.phone,
        country: userItem?.location?.country,
        state: userItem?.location?.state,
        date: userItem?.dob?.date,
      };
    });
  };

  useEffect(() => {
    const listData = localStorage.getItem("users") || "[]";
    const localStoreData = JSON.parse(listData).length;
    console.log({ localStoreData });
    //used to fetch the API and feed it to frontend while loading
    !JSON.parse(listData).length && getUsers();
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  const renderHeader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "24px 0px" }}>
        <h2 id="headerList">Users List({parsedData?.length})</h2>
        <div className="add-action-btn" onClick={enterDetails}>
          <FontAwesomeIcon icon={faCirclePlus} size="1x" />
          <span className="add-icon">Add User</span>
        </div>
      </div>
    );
  };

  const renderUsers = () => {
    // use localStorage users list instead localState users here

    const renderData = [];
    (parsedData || []).map((userItem, index) => {
      renderData.push(
        <User username={userItem?.username} key={index} onUserClick={showUserInfo} userId={userItem?.id} />
      );
    });
    return renderData;
  };

  return (
    <div className="home-container">
      <div style={{ width: "60%" }}>
        {renderHeader()}
        {renderUsers()}
      </div>
    </div>
  );
};

export default Users;
