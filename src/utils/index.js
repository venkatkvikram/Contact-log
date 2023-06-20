import { createContext } from "react";



const UsersContext = createContext({
    users: [], 
    setUsers: ()=> {}
})


export {UsersContext}

