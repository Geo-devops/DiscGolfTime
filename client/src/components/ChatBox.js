import React from "react";
import MessageList from "./MessageList";

function ChatBox() {

    // function openForm() {
    //     console.log('open clicked');
    //     document.getElementById("myForm").style.display = "block";
    //     console.log(document.getElementById('myForm').style.display)
    // }

    function closeForm() {
        console.log('close clicked');
        document.getElementById("myForm").style.display = "none";
    }

    function sendMessage(event) {
        event.preventDefault();
        const message = document.getElementById("messageBox").value;
        console.log('Message: ', message)
    }

    return (
        <div>
            
            {/* <button
            className="open-button success"
            onClick={openForm}
            >Open Form
            </button>
     */}
            <div className="form-popup" id="myForm">

                <form className="form-container">

                    <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={closeForm}
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>

                    <h1>Chat Test</h1>
                    
                    <MessageList />

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

export default ChatBox;