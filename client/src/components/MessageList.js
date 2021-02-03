import React from "react";

function MessageList() {

    const DUMMY_DATA = [
        {
            senderId: "apnordin",
            text: "Hello! Nice to meet you"
        },
        {
            senderId: "pdnarmi",
            text: "I already know you"
        }
    ]

    return (
        <div class="card">
            <div className="message-list">
                {DUMMY_DATA.map(message => (
                    <div className="message">
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