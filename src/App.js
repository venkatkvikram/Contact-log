import "./styles.css";
import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./utils";

// API URL: https://randomuser.me/api/?limit=10
const apiUrl = "https://66ae-45-112-29-230.ngrok-free.app/v1/getRandomUsers";

export default function App() {
  const [isLoading, setLoader] = useState(true);
<<<<<<< HEAD
  const [addUser, setUser] = useState(false);
=======
>>>>>>> 9e82c4b40596ce7a6cdcb868e9232d74db3d24d0
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();
<<<<<<< HEAD

  //get list of users api
=======
 
>>>>>>> 9e82c4b40596ce7a6cdcb868e9232d74db3d24d0
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

<<<<<<< HEAD
  const enterDetails = () => {
    navigate(`/add-user-info`);
  };
=======
>>>>>>> 9e82c4b40596ce7a6cdcb868e9232d74db3d24d0

  useEffect(() => {
    //used to fetch the API and feed it to frontend while loading
    getUsers();
    console.log("useEffect call");
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
<<<<<<< HEAD
    <UsersContext.Provider value={{users, setUsers}}>
      <div className="App">
        <h1>Users List({users.length})</h1>
        <Users users={users} onUserClick={showUserInfo} />
        <button onClick={enterDetails}>Add user</button>
      </div>
    </UsersContext.Provider>
=======
    <div className="App">
      <h1>Users List({users.length})</h1>
      <Users users={users} onUserClick={showUserInfo} />
    </div>
>>>>>>> 9e82c4b40596ce7a6cdcb868e9232d74db3d24d0
  );
}
