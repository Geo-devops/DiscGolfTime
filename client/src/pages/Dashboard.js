import React, { useState } from "react";
import UserNavbar from "../components/Navbar"
import Chatbox from "../components/ChatBox";
import AUTH from "../utils/AUTH"

export default function Dashboard () {

    const [users, setUsers] = useState([])
    // console.log('FROM DASHBOARD, users: ', users);

    const submitGetUser = async e => {
        const thisUserID = localStorage.token.slice(10,34)
        // console.log('ThisUserID: ', thisUserID)

        e.preventDefault()
        console.log('SubmitGetUser clicked!')
        const user = await AUTH.getOneUser(thisUserID)
        console.log(user);
    }

    return(
        
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            />
            <div className="m-4">
            Welcome user!
            <button className="btn btn-success m-5" type="submit" onClick={submitGetUser}>Get User!</button>
            <Chatbox />
     
            </div>
        </div>
    )
}