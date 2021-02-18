import React, { useState, useEffect } from "react";


function MessageList( {messageList, messageList2, chatpartner }) {


    const [partneredMessageList, setPartneredMessageList] = useState();
    
    const getMessagesForUser = () => {
        if (messageList && !messageList2) {
            for (let i = 0; i<messageList.length; i++) {
                if (messageList[i].chatPartner === chatpartner) {
                    // console.log('MESSAGES FOR THIS PARTNER: ', messageList[i].chats)
                    setPartneredMessageList(messageList[i].chats)
                }
            }
        }
        else if (messageList2) {
            for (let i = 0; i<messageList2.length; i++) {
                if (messageList2[i].chatPartner === chatpartner) {
                    setPartneredMessageList(messageList2[i].chats)
                }
            }
        }
    }

    useEffect(() => {
        getMessagesForUser()
    })

    // const messageListBox = document.getElementById("messageListBox");
    // if (messageListBox) {
    //     // console.log('HEIGHT: ', messageListBox.scrollHeight)
    //     messageListBox.scrollTop = messageListBox.scrollHeight;
    // }

    // if (messageList === undefined && messageList2 === undefined ) {
    //     // console.log('BOTH are undefined')
    //     return (
    //         <div className="card"></div>
    //     )
    // } else if (messageList2 === undefined && messageList) {
    //     // console.log('using messagelist1')

    if (partneredMessageList) {

        return (
            <div className="card mList">
            <div className="message-list" id="messageListBox">
                {partneredMessageList.map(message => (
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
    return(
        <div></div>
    )
}

    
    // } else if (messageList2) {
    //     // console.log('using messagelist2')
    //     return (
    //     <div className="card mList">
    //         <div className="message-list" id="messageListBox">
    //             {messageList2.map(message => (
    //                 <div className="message">
    //                     <div className="senderId">
    //                     {message.senderId}
    //                     </div>
    //                     <div className="messageContent rounded d-inline-flex pr-1 pl-1">
    //                     {message.text}
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // )
    // }
}

export default MessageList;