import "./styles.css";
import { useState } from "react";

import AppRoutes from "./AppRoutes";
import { UsersContext } from "./utils";

const App = () => {
    const [users, setUsers] = useState([]);
    return (
        <div className="App">
            <UsersContext.Provider value={{ users, setUsers }}>
                <AppRoutes />
            </UsersContext.Provider>
        </div>
    )
}

export default App;
