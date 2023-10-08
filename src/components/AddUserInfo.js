import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddUser.css";
import { UsersContext } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const AddUserInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  const { users, setUsers } = useContext(UsersContext);
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
    const obj = { ...users, ...userInfo };

    setUsers((prevUsers) => {
      console.log({ prevUsers });
      return [...prevUsers, userInfo];
    });
    const listData = localStorage.getItem("users");
    const usersList = JSON.parse(listData);
    usersList.push({ id: usersList.length, ...userInfo});
    console.log(usersList);
    localStorage.setItem("users", JSON.stringify(usersList));
    navigate("/");
    // console.log(obj);
  };

  return (
    <div className="containerWrap">
      <div className="form container">
        <h2 style={{ margin: "auto" }}>Enter Details</h2>
        <div style={{ display: "flex" }}>
          <div>
            <input
              type="text"
              name="username"
              className="inputField"
              onChange={handleOnChangeTextField}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="number"
              name="contact-no"
              className="inputField"
              onChange={handleOnChangeTextField}
              placeholder="Mobile Number"
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <input
              type="email"
              name="email"
              className="inputField"
              onChange={handleOnChangeTextField}
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              style={{ width: "89%" }}
              type="date"
              name="date"
              className="inputField"
              onChange={handleOnChangeTextField}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "contents" }}>
            <input
              type="text"
              name="city"
              className="inputField"
              onChange={handleOnChangeTextField}
              placeholder="Enter City"
            />
          </div>
          <div>
            <input
              type="text"
              name="state"
              className="inputField"
              onChange={handleOnChangeTextField}
              placeholder="Enter State"
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <select style={{ width: "145%" }} name="country" className="inputField">
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="australia">Australia</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <div onChange={handleOnChangeTextField}>
              <span>
                <input type="radio" value="Male" name="gender" className="inputField" />
                <span>Male</span>
              </span>
              <span>
                <input type="radio" value="Female" name="gender" className="inputField" />
                <span>Female</span>
              </span>
              <span style={{ marginLeft: "16px" }}>
                <input type="radio" value="Other" name="gender" />
                <span>Other</span>
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <button className="submitUserDetails" type="submit" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faPaperPlane} />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserInfo;
