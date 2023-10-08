import { createContext } from "react";



const UsersContext = createContext({
    users: [], 
    setUsers: ()=> {}
})


const parseOrStringifyData = (data, isParsed = false) => {
    if(isParsed) {
        return JSON.parse(data)
    }
    return JSON.stringify(data)
}


export {UsersContext, parseOrStringifyData}

