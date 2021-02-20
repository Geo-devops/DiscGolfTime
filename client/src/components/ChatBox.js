import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import CHATR from "../utils/CHATR";

export default function ChatBox( {thisUser, chatpartner, messageList } ) {

    const thisUserName = thisUser.username

    const [messageList2, setMessageList2] = useState();

    const refresh = async e => {
        if (chatpartner !== undefined) {
            // console.log('refresh clicked!');
            const messages = await CHATR.getMessages({
                user: thisUserName
            })
            setMessageList2(messages.data)
        } else {
            return
            // console.log('TRIED TO REFRESH, BUT NO CHATPARTNER')
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
          refresh()
        }, 1000);
        return () => clearInterval(interval);
      }, [chatpartner]);

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

        CHATR.addMessageInvert({
            user: chatpartner,
            chatPartner: thisUser.username,
            thisChat: {
                senderId: thisUser.username,
                text: message
            }
        })

        console.log('Message: ', message)
        document.getElementById("messageBox").value = '';
        refresh();
    }

    return (
        <div>
          
            <div className="form-popup chatbox" id="myForm">

                <form className="form-container">

                    <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={closeForm}
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>

                    <h5 className="mb-2 mt-2 ml-1">Chatting With: {chatpartner}</h5>
                    
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