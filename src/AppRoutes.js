import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import AddUserInfo from "./components/AddUserInfo";
import Users from "./components/Users";
import EditUserInfo from "./components/EditUserInfo";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/user-details/:userId" element={<UserDetails />} />
                <Route path="/add-user-info" element={<AddUserInfo />} />
                <Route path="/edit-user-info/:userId" element={<EditUserInfo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
