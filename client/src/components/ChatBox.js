import React, {useState, useEffect} from "react";
import MessageList from "./MessageList";
import CHATR from "../utils/CHATR";

export default function ChatBox( {thisUser, chatpartner, messageList } ) {

    const [messageList2, setMessageList2] = useState();

    const refresh = async () => {
        console.log('refresh clicked!');
        console.log('THISUSER: ', thisUser.username)
        console.log('CHATPARTNER: ', chatpartner)
        const messages = await CHATR.getMessages({
            user: thisUser.username,
            chatPartner: chatpartner
        })
        console.log('MESSAGES: ', messages)
        console.log('MESSAGES.data.chats: ', messages.data.chats)
        setMessageList2(messages.data.chats)
    }

    function closeForm() {
        console.log('close clicked');
        document.getElementById("myForm").style.display = "none";
    }

    function sendMessage(event) {
        event.preventDefault();
        const message = document.getElementById("messageBox").value;
        CHATR.addMessage({
            user: thisUser.username,
            chatPartner: chatpartner,
            thisChat: {
                senderId: thisUser.username,
                text: message
            }
        })

        console.log('Message: ', message)
    }

    return (
        <div>
          
            <div className="form-popup" id="myForm">

                <form className="form-container">
                    <button
                    type="button"
                    className="open-button"
                    onClick={refresh}
                    >
                    <span aria-hidden="true">Refresh</span>
                    </button>

                    <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={closeForm}
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>

                    <h1>Chat Test</h1>
                    
                    <MessageList
                    thisUser={thisUser}
                    chatpartner={chatpartner}
                    messageList={messageList}
                    messageList2={messageList2}
                    />
                
                    <input
                    id="messageBox"
                    type="text"
                    placeholder="Type your message here"
                    name="msg">
                    </input>

                    <button
                    type="submit"
                    className="btn send"
                    onClick={sendMessage}
                    >Send
                    </button>

                </form>
            </div>
        </div>
    )
}