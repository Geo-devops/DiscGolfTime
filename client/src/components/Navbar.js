import React, {useState, useEffect } from "react";
import AUTH from "../utils/AUTH";
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import CHATR from "../utils/CHATR";
import ChatBox from "./ChatBox"

export default function Navbar( { users, setUsers, thisUser }) {
    // console.log('THISUSER: ', thisUser.username)

    const thisUserName = thisUser.username

    const [chatpartner, setChatpartner] = useState();
    const [messageList, setMessageList] = useState();
    

    const getUsers = async e => {

        const users = await AUTH.findAllUsers()
        // console.log('users: ', users);
        let allUsers = users.data
        // console.log('allUsers before delete: ', allUsers)
        
        let i;
        for (i = 0; i < allUsers.length; i++) {
            if (allUsers[i]._id === localStorage.token.slice(10,34)) {
                // console.log('We have a match! AllUsers[i]._id: ', allUsers[i].firstName + " localStorage: " + localStorage.token.slice(10,34))
                allUsers.splice([i],1)
            } else {
                // console.log('NO MATCH WAS FOUND', allUsers[i].firstName + " localStorage: " + localStorage.token.slice(10,34))
            }
        }
        setUsers(allUsers)
    }

    const getMessages = async e => {
        const messages = await CHATR.getMessages(
            {
            user: thisUserName,
        })

        setMessageList(messages.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const openForm = async (result) => {
        CHATR.newOrOpenChat({
            user: thisUser.username,
            chatPartner: result
        })

        CHATR.newOrOpenChatInvert({
            user: thisUser.username,
            chatPartner: result
        })
        setChatpartner(result);

        document.getElementById("myForm").style.display = "block";
    }

    const logout = () => {
        console.log('logout clicked');
        localStorage.clear();
        window.location.reload();
    }

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
                >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to find users"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                    (child) =>
                        // console.log(value),
                        // console.log('CHILD.props.children: ', child.props.children),
                        !value || child.props.children.includes(value)
                    )}
                </ul>
                </div>
            );
        },
    );
    
    
    return(
        <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1"></span>
                <div className="nav navbar-right">
            
           <Dropdown className="mr-3" onClick={getMessages}>
                <Dropdown.Toggle
                    // onClick={getMessages}
                    className="open-button"
                    variant="success"
                    id="dropdown-custom-components"
                    >
                    Chat
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                    {users.map(result => (
                        <Dropdown.Item key={result._id}
                        onClick={() => openForm(result.username)}
                        >{result.username}
                        </Dropdown.Item>
                        ))}
                </Dropdown.Menu>
            </Dropdown>

            <button
            className="open-button success mr-3"
            onClick={logout}
            >Log Out
            </button>
        <ChatBox
        thisUser={thisUser}
        chatpartner={chatpartner}
        messageList={messageList}
        />
        </div>
    </nav>
    )

}
