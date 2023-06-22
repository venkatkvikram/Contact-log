import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddUser.css"
import { UsersContext } from "../utils";

const AddUserInfo = () => {

  const [userInfo, setUserInfo] = useState({});

  const {users, setUsers} = useContext(UsersContext)
  const navigate = useNavigate();
  


   const handleOnChangeTextField = (event) => {
    const { name, value } = event?.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };


  const handleSubmit = () => {
  //  setUsers({ ...users, ...userInfo })
  const obj = { ...users, ...userInfo }

  setUsers(prevUsers => {
    console.log({prevUsers})
    return [...prevUsers, userInfo]
  });
  const listData = localStorage.getItem('users')
  const usersList = JSON.parse(listData)
  usersList.push({...userInfo, id: usersList.length+1}``);
  console.log(usersList)
  localStorage.setItem('users', JSON.stringify(usersList))
  navigate('/')
  console.log(obj)
  }

  
  return (
    <div className="form container">
      <label>Name</label>
      <input type="text" name="username" className="user-name" value={userInfo?.username} onChange={handleOnChangeTextField} />
      <label>Age</label>
      <input type="number" name="age" className="user-age" onChange={handleOnChangeTextField} />
      <label>Contact No</label>
      <input type="number" name="contact-no" className="user-mobile" onChange={handleOnChangeTextField} />
      <label>Email</label>
      <input type="email" name="email" className="user-email" onChange={handleOnChangeTextField} />
      <label>DOB</label>
      <input type="date" name="date"className="user-dob" onChange={handleOnChangeTextField} />
      <label>City</label>
      <input type="text" name="city" className="user-city" onChange={handleOnChangeTextField} />
      <label>State</label>
      <input type="text" name="state" className="user-state" onChange={handleOnChangeTextField} />
      <label>Country</label>
      <select name="country">
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="australia">Australia</option>
      </select>
      <label>Gender</label>
      <div onChange={handleOnChangeTextField}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>   
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>

  );
};

export default AddUserInfo;
