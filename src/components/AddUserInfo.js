import React, { useContext, useState } from "react";
import "../styles/AddUser.css"
import { add } from "lodash";
import { UsersContext } from "../utils";

const AddUserInfo = () => {

  //  const[fillForm, setFillForm] = useState({})
  const [userInfo, setUserInfo] = useState({});


  const context = useContext(UsersContext)



   const handleOnChangeTextField = (event) => {
    const { name, value } = event?.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  console.log(userInfo)


  const handleSubmit = () => {
      setUsers({
        ...context.users,
      })
  }


  console.log(handleSubmit())



  return (
    <div className="form container">
      <label>Name</label>
      <input type="text" name="full-name" className="user-name" onChange={handleOnChangeTextField} />
      <label>Age</label>
      <input type="number" name="age" className="user-age" onChange={handleOnChangeTextField} />
      <label>Contact No</label>
      <input type="number" name="contact-no" className="user-mobile" onChange={handleOnChangeTextField} />
      <label>Email</label>
      <input type="email" name="email" className="user-email" onChange={handleOnChangeTextField} />
      <label>DOB</label>
      <input type="date" name="date-of-birth" className="user-dob" onChange={handleOnChangeTextField} />
      <label>City</label>
      <input type="text" name="city" className="user-city" onChange={handleOnChangeTextField} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
    
  );
};

export default AddUserInfo;
