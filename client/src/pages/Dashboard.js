import React from "react";
import Chatbox from "../components/ChatBox"
// import AUTH from "../utils/AUTH"

function Dashboard (props) {

    // const getTheUser = () => {
    //     AUTH.getUser()
    //     .then(results=> {
    //         console.log(results)
    //     })
    //     .catch(err => console.log(err));
    // }

    return(
        <div className="m-4">
            Welcome user {props.user}
            <Chatbox />
     
        </div>
    )
}

export default Dashboard;