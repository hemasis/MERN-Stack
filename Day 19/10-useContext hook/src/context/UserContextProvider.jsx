import React, {useState } from 'react'
import userContext from "./UserContext";


function UserContextprovider({children}) {
    const [user, setUser] = useState(null)
  return (
    <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
  )
}

export default UseContext
