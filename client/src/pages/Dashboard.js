import React, { useState } from "react";
import UserNavbar from "../components/Navbar"
import Chatbox from "../components/ChatBox";

export default function Dashboard () {
    
    const [users, setUsers] = useState()

    return(
        
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            />
            <div className="m-4">
            Welcome user!
            <Chatbox />
     
            </div>
        </div>
    )
}