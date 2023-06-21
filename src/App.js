import "./styles.css";
import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./utils";

// API URL: https://randomuser.me/api/?limit=10
const apiUrl = "https://e0e5-45-112-29-235.ngrok-free.app/v1/getRandomUsers";

export default function App() {
  const [isLoading, setLoader] = useState(true);
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();


  //get list of users api
 
  const getUsers = async () => {
    const results = await (await fetch(apiUrl)).json();
    if (results.data.length) {
      setLoader(false);
      setUsers(results.data);
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
    console.log("useEffect call");
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }


  return (
    <UsersContext.Provider value={{users, setUsers}}>
      <div className="App">
        <h1>Users List({users.length})</h1>
        <Users users={users} onUserClick={showUserInfo} />
        <button onClick={enterDetails}>Add user</button>
      </div>
    </UsersContext.Provider>
  );
}
