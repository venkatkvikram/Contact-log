import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/UserDetails.css";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState({});
  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    // const getUserById = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://8ce9-45-112-29-248.ngrok-free.app/v1/getRandomUserById?userId=${userId}`
    //     );
    //     const data = await response.json();
    //     setUserInfo(data?.data);
    //   } catch (error) {
    //     console.error("Error retrieving user details:", error);
    //   }
    // };

    // getUserById();

    const individualDetails = localStorage.getItem("users");
    console.log(individualDetails);
    const parseDetails = JSON.parse(individualDetails);
    const userData = parseDetails.find((item) => {
      return item.id === Number(userId);
    });
    setUserInfo(userData);
  }, [userId]);

  console.log(userInfo);

  return (
    <div className="userdetails-container">
      <h1 className="userdetails-heading">Users Details</h1>
      <div className="userdetails-body">
        {/* <img alt="Profile" src={userInfo?.picture?.large} style={{ borderRadius: "50%", padding: 12, margin: 12 }} /> */}
        <ul className="userdetails-ul">
          {/* <li>
            Name : {userInfo?.name?.title} {userInfo?.name?.last} {userInfo?.name?.first}{" "}
          </li> */}
          <li>Full Name: {userInfo?.username}</li>
          <li>Gender : {userInfo?.gender} </li>
          <li>Age : {userInfo?.age}</li>
          <li>Email : {userInfo?.email} </li>
          <li>Mobile : {userInfo?.mobile} </li>
          <li>City: {userInfo?.city} </li>
          <li>Country : {userInfo?.country} </li>
          <li>State : {userInfo?.state} </li>
        </ul>
      </div>
      <button className="goback-btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
