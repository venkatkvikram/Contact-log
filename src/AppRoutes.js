import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import AddUserInfo from "./components/AddUserInfo";
import Users from "./components/Users";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/user-details/:userId" element={<UserDetails />} />
                <Route path="/add-user-info" element={<AddUserInfo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
