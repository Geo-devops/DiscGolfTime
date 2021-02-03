import React from "react";
import MessageList from "./MessageList";

function ChatBox() {

    function openForm() {
        console.log('open clicked');
        document.getElementById("myForm").style.display = "block";
        console.log(document.getElementById('myForm').style.display)
    }

    function closeForm() {
        console.log('close clicked');
        document.getElementById("myForm").style.display = "none";
    }


    return (
        <div>
            
            <button
            className="open-button success"
            onClick={openForm}
            >Open Form
            </button>
    
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
                    type="text"
                    placeholder="Type your message here"
                    name="msg">
                    </input>

                    <button
                    type="submit"
                    className="btn send"
                    // onClick={}
                    >Send
                    </button>

                </form>
            </div>
        </div>
    )
}

export default ChatBox;