import React from "react";
import AUTH from "../utils/AUTH";
import Dropdown from 'react-bootstrap/Dropdown'

export default function Navbar( { users, setUsers }) {

    //AUTH route to get users and search/sort them. When you click on a user, then it opens the chatbox using openForm()
    

    const openForm = () => {
        console.log('open clicked');
        document.getElementById("myForm").style.display = "block";
    }

    const getUsers = async e => {
        const users = await AUTH.findAllUsers()
        let allUsers = users.data
        // console.log('allUsers before delete: ', allUsers)
        let i;
        for (i = 0; i < allUsers.length; i++) {
            if (allUsers[i]._id === localStorage.token.slice(10,34)) {
                const key = allUsers[i]
                allUsers.splice(key,1)
                // console.log('allUsers after delete: ', allUsers)
            }
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
                    <Dropdown.Item key={result._id} onClick={openForm} href="#/action-1">{result.firstName} {result.lastName}</Dropdown.Item>
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
