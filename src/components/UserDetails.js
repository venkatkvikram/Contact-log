import React from "react";

const UserDetails = ({ onClose, userInfo }) => {
  return (
    <div>
      <h1>Users Details</h1>
      <div>
        <img
          alt="Profile"
          src={userInfo?.picture.large}
          style={{ borderRadius: "50%", padding: 12, margin: 12 }}
        />
        <ul
          style={{
            listStyle: "none",
            textAlign: "left",
          }}
        >
          <li>
            Name : {userInfo?.name.title} {userInfo?.name.last}{" "}
            {userInfo?.name.first}{" "}
          </li>
          <li>UserName: {userInfo?.login.username}</li>
          <li>Gender : {userInfo?.gender} </li>
          <li>Age : {userInfo?.dob.age}</li>
          <li>Email : {userInfo?.email} </li>
          <li>Mobile : {userInfo?.phone} </li>
          <li>City: {userInfo?.location.city} </li>
          <li>Country : {userInfo?.location.country} </li>
          <li>State : {userInfo?.location.state} </li>
          {/* <li>TimeZone : {userInfo?.location.timeZone.description} </li> */}
        </ul>
      </div>
      <button onClick={onClose}>Go Back</button>
    </div>
  );
};

export default UserDetails;
