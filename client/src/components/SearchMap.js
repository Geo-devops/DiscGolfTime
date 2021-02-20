import React, { useState, useEffect } from "react";
import Search from "./Search";
import Map from "./Map";
import UserNavbar from "../components/Navbar"
import AUTH from "../utils/AUTH"

export default function SearchMap () {

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

    return(
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            thisUser ={thisUser}
            />
            <div className="container">

        <div className = "row mt-3">
            <div className = "col-12 mb-3">
                <h1 className="text-center">
                    Welcome to Tee Time!
                </h1>
            </div>
            <div className = "col-4">
                <Search />
            </div>
            <div className = "col-8">
                <Map />
            </div>
        </div>
        </div>
            </div>
    )

}