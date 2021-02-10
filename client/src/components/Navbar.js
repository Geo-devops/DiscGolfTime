import React from "react";
import AUTH from "../utils/AUTH";
import Dropdown from 'react-bootstrap/Dropdown'

export default function Navbar( { users, setUsers }) {

    //AUTH route to get users and search/sort them. When you click on a user, then it opens the chatbox using openForm()
    
    // const userID = JSON.parse(localStorage.token).token
    // console.log('userID: ', userID);
    // const objectId = `ObjectId("${userID}")`
    // console.log('objectId: ', objectId)
    
    // const getUsers = () => {
    //     AUTH.findAllUsers()
    //     .then(results => {
    //         const allUsers = results.data
    //         console.log('All Users: ', allUsers)
    //     })
    //     document.getElementById("myForm").style.display = "block";
    // }

    const openForm = () => {
        console.log('open clicked');
        document.getElementById("myForm").style.display = "block";
    }

    const getUsers = async e => {
        const users = await AUTH.findAllUsers()
        const allUsers = users.data
        console.log('users.data: ', users.data)
        let i;
        for (i = 0; i < allUsers.length; i++) {
            console.log('allUser ids: ', allUsers[i]._id)
            console.log('LocalStorage: ', localStorage);
        }
        setUsers(allUsers)
    }

    const logout = () => {
        console.log('logout clicked');
        localStorage.clear();
        window.location.reload();
    }

    if (!users) {

        return(
            <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Navbar gonna be so lit</span>
            
            <div className="nav navbar-right">

            <Dropdown className="mr-3" onClick={getUsers}>
                <Dropdown.Toggle className="open-button" variant="success" id="dropdown-basic">
                    Chat
                </Dropdown.Toggle>
            </Dropdown>

            <button
            className="open-button success mr-3"
            onClick={logout}
            >Log Out
            </button>
            </div>
    
        </nav>
    )

} 
else 
{
    return(
        <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar gonna be so lit</span>
        
        <div className="nav navbar-right">

        <Dropdown className="mr-3" onClick={getUsers}>
            <Dropdown.Toggle className="open-button" variant="success" id="dropdown-basic">
                Chat
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {users.map(result => (
                    <Dropdown.Item onClick={openForm} href="#/action-1">{result.firstName} {result.lastName}</Dropdown.Item>
                    ))}
            </Dropdown.Menu>
        </Dropdown>

        <button
        className="open-button success mr-3"
        onClick={logout}
        >Log Out
        </button>
        </div>

    </nav>
    )
}

}
