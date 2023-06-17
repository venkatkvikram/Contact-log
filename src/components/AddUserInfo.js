import React from "react";

const AddUserInfo = () => {
  return (
    <div>
      <label>Name</label>
      <input type="text" name="full-name" onChange={handleOnChangeField} className="user-name" />
      <label>Age</label>
      <input type="number" name="age" className="user-age" />
      <label>Contact No</label>
      <input type="number" name="contact-no" className="user-" />
      <label>Email</label>
      <input type="email" name="email" className="user-name" />
      <label>DOB</label>
      <input type="date" name="date-of-birth" className="user-name" />
      <label>City</label>
      <input type="text" name="city" className="user-name" />
    </div>
  );
};

export default AddUserInfo;
