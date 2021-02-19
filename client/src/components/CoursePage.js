import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import UserNavbar from "../components/Navbar"
import AUTH from "../utils/AUTH"

export default function CoursePage({courseName}) {

    const [thisUser, setThisUser] = useState([])

    const getUser = async e => {
        const thisUserID = localStorage.token.slice(10,34)
        // console.log('ThisUserID: ', thisUserID)

        // e.preventDefault()
        const user = await AUTH.getOneUser(thisUserID)
        // console.log('USER.data:', user.data);
        setThisUser(user.data)
    }
    
    useEffect(() => {
        getUser()
    }, [])

    const [users, setUsers] = useState([])

    const history = useHistory()
    console.log('the selected course is ! ', history.location.state)
    const { name } = history.location.state

    return (
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            thisUser ={thisUser}
            />
        <div className = "row mt-3">
            <div className = "col-12 mb-3">
                <h1 className="text-center">
                    {name}
                </h1>
            </div>
            <div className="col-4">Feed</div>
            <div className="col-8">Course Information</div>
        </div>
        </div>
    )
}