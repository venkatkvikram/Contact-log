import React, { useContext, useState } from "react";
import "../styles/AddUser.css"
import { add } from "lodash";
import { UsersContext } from "../utils";

const AddUserInfo = () => {

  const [userInfo, setUserInfo] = useState({});

  const {users, setUsers} = useContext(UsersContext)

  


   const handleOnChangeTextField = (event) => {
    const { name, value } = event?.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  console.log(userInfo)

  const handleSubmit = () => {
  //  setUsers({ ...users, ...userInfo })
  const obj = { ...users, ...userInfo }

  setUsers(prevUsers => {
    console.log({prevUsers})
    return [...prevUsers, userInfo]
  });
  // localStorage.getItem('users')

  // users.push(userInfo);
  
  console.log(obj)
  }

  
  console.log(users)
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







// import React, { useContext, useState } from "react";
// import { UsersContext } from "../utils";
// import "../styles/AddUser.css";

// const AddUserInfo = () => {
//   const [userInfo, setUserInfo] = useState({});
//   const context = useContext(UsersContext);

//   const handleOnChangeTextField = (event) => {
//     const { name, value } = event?.target;
//     setUserInfo({
//       ...userInfo,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Make an API call to add the user
//       const response = await fetch("https://66ae-45-112-29-230.ngrok-free.app/v1", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userInfo),
//       });

//       if (response.ok) {
//         const newUser = await response.json();
//         context.setUsers((prevUsers) => [...prevUsers, newUser]);
//         // Reset the form after successful submission
//         setUserInfo({});
//       } else {
//         // Handle error if the API call fails
//         console.error("Error adding user");
//       }
//     } catch (error) {
//       console.error("Error adding user", error);
//     }
//   };


//   console.log(handleSubmit())

//   return (
//     <div className="form container">
//       <label>Name</label>
//       <input type="text" name="full-name" className="user-name" onChange={handleOnChangeTextField} />
//       {/* Rest of the input fields */}
//       <label>Age</label>
//       <input type="number" name="age" className="user-age" onChange={handleOnChangeTextField} />
//       <label>Contact No</label>
//       <input type="number" name="contact-no" className="user-mobile" onChange={handleOnChangeTextField} />
//       <label>Email</label>
//       <input type="email" name="email" className="user-email" onChange={handleOnChangeTextField} />
//       <label>DOB</label>
//       <input type="date" name="date-of-birth" className="user-dob" onChange={handleOnChangeTextField} />
//       <label>City</label>
//       <input type="text" name="city" className="user-city" onChange={handleOnChangeTextField} />
//       <button type="submit" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default AddUserInfo;
