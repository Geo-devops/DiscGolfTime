import React, { useState, useEffect } from "react";
import UserNavbar from "../components/Navbar"
import Chatbox from "../components/ChatBox";
import AUTH from "../utils/AUTH"

export default function Dashboard () {

    const [thisUser, setThisUser] = useState([])

    const getUser = async e => {
        const thisUserID = localStorage.token.slice(10,34)
        // console.log('ThisUserID: ', thisUserID)

        // e.preventDefault()
        const user = await AUTH.getOneUser(thisUserID)
        console.log('USER.data:', user.data);
        setThisUser(user.data)
    }

    useEffect(() => {
        getUser()
    }, [])


    const [users, setUsers] = useState([])
    
    return(
        
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            />
            <div className="m-4">
            Welcome user: <strong>
                {thisUser.firstName} {thisUser.lastName}
                </strong>
            <Chatbox />
     
            </div>
        </div>
    )
}