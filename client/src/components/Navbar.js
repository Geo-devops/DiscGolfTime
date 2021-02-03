import React from "react";

function Navbar() {

    function openForm() {
        console.log('open clicked');
        document.getElementById("myForm").style.display = "block";
    }

    return(
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Navbar gonna be so lit</span>
            
            <button
            className="open-button success"
            onClick={openForm}
            >Chat
            </button>
    
        </nav>
    )
}

export default Navbar;