import React from "react";


function MessageList( {messageList, messageList2 }) {

    console.log('MESSAGE LIST FROM ML: ', messageList);

    if (messageList === undefined ) {
        return (
            <div className="card"></div>
        )
    } else if (!messageList2) {

        return (
            <div className="card">
            <div className="message-list">
                {messageList.map(message => (
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
    
    } else {
        
        return (
            <div className="card">
            <div className="message-list">
                {messageList2.map(message => (
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
}

export default MessageList;