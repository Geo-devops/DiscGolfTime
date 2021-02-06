import React from "react";

function Navbar() {

    //AUTH route to get users and search/sort them. When you click on a user, then it opens the chatbox using openForm()

    function openForm() {
        console.log('open clicked');
        document.getElementById("myForm").style.display = "block";
    }
    
    function logout() {
        console.log('logout clicked');
    }

    return(
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Navbar gonna be so lit</span>
            
            <div className="nav navbar-right">

            <button
            className="open-button success mr-3"
            onClick={openForm}
            >Chat
            </button>

            <button
            className="open-button success mr-3"
            onClick={logout}
            >Log Out
            </button>
            </div>
    
        </nav>
    )
}

export default Navbar;