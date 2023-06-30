import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "../utils";

const EditUserInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  const { users, setUsers } = useContext(UsersContext);
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    const inData = localStorage.getItem("users");
    const parseData = JSON.parse(inData);
    const userData = parseData.find((userItem) => {
      // console.log({userItem, userId, storedUserId: userItem.id})
      return userItem.id === Number(userId); //the userId we get by params is a string and it won't match with the id which is a number
    });
    console.log({ userData, inData, parseData });
    setUserInfo(userData);
  }, []);

  const handleOnChangeTextField = (event) => {
    const { name, value } = event?.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  console.log(userInfo);

  const handleUpdate = () => {
    const listData = localStorage.getItem("users");
    const usersList = JSON.parse(listData);
    // usersList.push({...userInfo, id: usersList.length+1}``);
    const updatedData = usersList.map((item) => {
      if (item.id === Number(userId)) {
        return { ...item, ...userInfo };
      }
      return item;
    });
    localStorage.setItem("users", JSON.stringify(updatedData));
    navigate("/");
    console.log(updatedData);
  };

  useEffect(() => {}, []);

  return (
    <div className="form container">
      <label>Name</label>
      <input
        type="text"
        name="username"
        className="user-name"
        value={userInfo?.username}
        onChange={handleOnChangeTextField}
      />
      <label>Age</label>
      <input type="number" name="age" className="user-age" value={userInfo?.age} onChange={handleOnChangeTextField} />
      <label>Contact No</label>
      <input
        type="number"
        name="contact-no"
        className="user-mobile"
        value={userInfo?.name}
        onChange={handleOnChangeTextField}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        className="user-email"
        value={userInfo?.email}
        onChange={handleOnChangeTextField}
      />
      <label>DOB</label>
      <input type="date" name="date" className="user-dob" value={userInfo?.date} onChange={handleOnChangeTextField} />
      <label>City</label>
      <input type="text" name="city" className="user-city" value={userInfo?.city} onChange={handleOnChangeTextField} />
      <label>State</label>
      <input
        type="text"
        name="state"
        className="user-state"
        value={userInfo?.state}
        onChange={handleOnChangeTextField}
      />
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
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditUserInfo;
