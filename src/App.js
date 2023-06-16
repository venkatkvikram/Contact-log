import "./styles.css";
import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

// API URL: https://randomuser.me/api/?limit=10

const apiUrl = "https://randomuser.me/api/?results=10";

export default function App() {
  const [isLoading, setLoader] = useState(true);
  // const [addUser, setUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const getUsers = async () => {
    const { results } = await (await fetch(apiUrl)).json();
    if (results.length) {
      setLoader(false);
      setUsers(results);
    }
    console.log({ results });
  };

  const handleCloseInfo = () => {
    setIsOpen(false);
    setUserInfo({});
  };

  const showUserInfo = (id) => {
    const selectedUser = users.find((userItem) => userItem.id.name === id);
    setUserInfo(selectedUser);
    setIsOpen(true);
    console.log("User Clicked");
  };

  useEffect(() => {
    getUsers();
    console.log("useEffect call");
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div className="App">
      {isOpen ? (
        <UserDetails onClose={handleCloseInfo} userInfo={userInfo} />
      ) : (
        <div>
          <h1>Users List({users.length})</h1>
          <Users
            users={users}
            onUserClick={showUserInfo}
            onClose={handleCloseInfo}
          />
        </div>
      )}
    </div>
  );
}
