import { BrowserRouter, Routes, Route } from "react-router-dom"
import Users from "./components/Users"
import UserDetails from "./components/UserDetails"
import AddUserInfo from "./components/AddUserInfo"
import App from "./App"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/user-details/:userId" element={<UserDetails />} />
                <Route path="/add-user-info" element={<AddUserInfo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;