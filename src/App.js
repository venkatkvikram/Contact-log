import "./styles.css";
import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import { useNavigate } from "react-router-dom";

// API URL: https://randomuser.me/api/?limit=10
const apiUrl = "https://c649-45-112-29-195.ngrok-free.app/v1/getRandomUsers";

export default function App() {
  const [isLoading, setLoader] = useState(true);
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [addUserInfo, setAddUserInfo] = useState({});

  const navigate = useNavigate();
 
  const getUsers = async () => {
    const  results  = await (await fetch(apiUrl)).json();
    if (results.data.length) {
      setLoader(false);
      setUsers(results.data);
    }
    console.log({ results });
  };

  const showUserInfo = (id) => {
    navigate(`/user-details/${id}`);
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
    <div className="App">
      <h1>Users List({users.length})</h1>
      <Users users={users} onUserClick={showUserInfo} />
    </div>
  );
}
