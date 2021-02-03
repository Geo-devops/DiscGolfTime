import React from "react";

function Chat() {

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

                    <h1>Chat Test</h1>

                    <input
                    type="text"
                    placeholder="Type your message here"
                    name="msg">
                    </input>

                    <button
                    type="submit"
                    className="btn"
                    // onClick={}
                    >Send
                    </button>

                    <button
                    type="submit"
                    className="btn cancel"
                    onClick={closeForm}
                    >Close
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Chat;