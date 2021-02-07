import React from "react";
import Navbar from "../components/Navbar"
import Chatbox from "../components/ChatBox";
// import AUTH from "../utils/AUTH"

function Dashboard () {

    return(
        
        <div>
            <Navbar />
            <div className="m-4">
            Welcome user!
            <Chatbox />
     
            </div>
        </div>
    )
}

export default Dashboard;