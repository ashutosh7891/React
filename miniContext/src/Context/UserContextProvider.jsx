import React from "react";
import userContext from "./userContext";
import { useState } from "react";

// userContextProvider non othere then a method 
const UserContextProvider = ({children}) => {
    const [user , setUser] = useState(null)
    return(
        <userContext.Provider value={{user , setUser}}>
            {children}
        </userContext.Provider>
        
    )

}

export default UserContextProvider;