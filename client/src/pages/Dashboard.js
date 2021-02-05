import React from "react";
import Chatbox from "../components/ChatBox"
import AUTH from "../utils/AUTH"

function Dashboard () {

    // const getTheUser = () => {
    //     AUTH.getUser()
    //     .then(results=> {
    //         console.log(results)
    //     })
    //     .catch(err => console.log(err));
    // }

    return(
        <div>
            Welcome user
            <Chatbox />
        </div>
    )
}

export default Dashboard;