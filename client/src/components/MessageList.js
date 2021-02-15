import React, { useEffect } from "react";
import CHATR from "../utils/CHATR";


function MessageList( {thisUser, chatpartner }) {

    const DUMMY_DATA = [
        {
            id: 1,
            senderId: "apnordin",
            text: "Hello! Nice to meet you"
        },
        {
            id: 2,
            senderId: "pdnarmi",
            text: "I already know you"
        }
    ]


    return (
        <div className="card">
            <div className="message-list">
                {DUMMY_DATA.map(message => (
                    <div key={message.id} className="message">
                        <div className="senderId">
                        {message.senderId}
                        </div>
                        <div className="messageContent rounded d-inline-flex pr-1 pl-1">
                        {message.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default MessageList;