import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { debounce } from 'lodash';

const getUserById = async () => {
  const response = await fetch(`https://c649-45-112-29-195.ngrok-free.app/v1/getRandomUserById?userId=${userId}`);
  const data = await response.json();
  setUserInfo(data);
};

const UserDetails = () => {

    const [userInfo, setUserInfo] = useState({});
    let { userId } = useParams();
  
    useEffect(() => {
      const getUserById = async () => {
        try {
          const response = await fetch(`https://c649-45-112-29-195.ngrok-free.app/v1/getRandomUserById?userId=${userId}`);
          const data = await response.json();
          setUserInfo(data?.data);
        } catch (error) {
          console.error("Error retrieving user details:", error);
        }
      };
  
      getUserById();
    }, [userId]);

    console.log({userInfo})

  return (
    <div>
      <h1>Users Details</h1>
      <div>
        <img alt="Profile" src={userInfo?.picture.large} style={{ borderRadius: "50%", padding: 12, margin: 12 }} />
        <ul
          style={{
            listStyle: "none",
            textAlign: "left",
          }}
        >
          <li>
            Name : {userInfo?.name.title} {userInfo?.name?.last} {userInfo?.name?.first}{" "}
          </li>
          <li>UserName: {userInfo?.login?.username}</li>
          <li>Gender : {userInfo?.gender} </li>
          <li>Age : {userInfo?.dob?.age}</li>
          <li>Email : {userInfo?.email} </li>
          <li>Mobile : {userInfo?.phone} </li>
          <li>City: {userInfo?.location?.city} </li>
          <li>Country : {userInfo?.location?.country} </li>
          <li>State : {userInfo?.location?.state} </li>
          {/* <li>TimeZone : {userInfo?.location.timeZone.description} </li> */}
        </ul>
      </div>
      <button>Go Back</button>
    </div>
  );
};

export default UserDetails;
