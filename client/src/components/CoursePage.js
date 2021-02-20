import React, {useState, useEffect} from "react";
import { Jumbotron } from "react-bootstrap";
import { useHistory } from 'react-router-dom'
import UserNavbar from "../components/Navbar"
import AUTH from "../utils/AUTH"
import Map from "../components/Map/Map"

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
    const { name, difficulty } = history.location.state
    const location = {
        address: history.location.state.address,
        lat: history.location.state.lat,
        lng: history.location.state.lng
    }
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
            <div className="col-8">
                <Jumbotron>
                    <h6 style={{textAlign:"left"}}>Name: {name}</h6>
                    <h6 style={{textAlign:"left"}}>Address: {location.address}</h6>
                    <h6 styke={{textAlign:"left"}}>Difficulty: {difficulty}</h6>
                    <Map location={location} zoomLevel={17}></Map>
                </Jumbotron>
            </div>
        </div>
        </div>
    )
}