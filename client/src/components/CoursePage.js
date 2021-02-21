import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import UserNavbar from "../components/Navbar"
import AUTH from "../utils/AUTH"
import FEED from "../utils/FEED"
import PostList from "../components/PostList"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Map from "../components/Map/Map"

export default function CoursePage({courseName}) {
    
    const [thisUser, setThisUser] = useState([])
    const [postList, setPostList] = useState()
    const [users, setUsers] = useState([])
    console.log('USER: ', thisUser.username)
    
    const getUser = async e => {
        const thisUserID = localStorage.token.slice(10,34)
        // console.log('ThisUserID: ', thisUserID)

        // e.preventDefault()
        const user = await AUTH.getOneUser(thisUserID)
        // console.log('USER.data:', user.data);
        setThisUser(user.data)
    }
    
    const getPosts = async e => {
        const posts = await FEED.getPosts(
            {
            courseName: name,
        })

        console.log('POSTS: ', posts);
        console.log('POSTS.DATA', posts.data)
        for (let i = 0; i< posts.data.length; i++) {
            if (posts.data[i].courseName === name) {
                setPostList(posts.data[i].posts)
            }
        }
    }

    const newOrOpenPost = async e => {
        FEED.newPost({
            courseName: name
        })
    }

    const addPost = e => {
        e.preventDefault();
        const post = document.getElementById("postBox").value;
        FEED.addPost({
            courseName: name,
            thisPost: {
                user: thisUser.username,
                text: post
            }
        })

        console.log('Post: ', post)
    }

    useEffect(() => {
        newOrOpenPost()
        getPosts()
        getUser()
    }, [])


    const history = useHistory()
    console.log('the selected course is ! ', history)
    const { name, address, difficulty } = history.location.state

    const location = {
        address: history.location.state.address,
        lng: history.location.state.lng,
        lat: history.location.state.lat
    }

    if (postList) {
        console.log('postlist: ', postList)
    }

    return (
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            thisUser ={thisUser}
            />
            <div className="container">

        <div className = "row mt-3 mb-4">
            <div className = "col-8">
                <h1>{name}</h1>
            </div>
            <div className="col-4">
                <button className="mt-2 btn float-right" onClick={() => history.goBack()}>Return to Search</button>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <h4>Feed</h4>
                <div className="form-inline">
                    <input
                        id="postBox"
                        className="form-control"
                        type="text"
                        placeholder="Type your post here"
                        name="post">
                    </input>

                    <button
                        type="submit"
                        className="btn postBtn"
                        onClick={addPost}
                        >Post!
                    </button>
                </div>

                <PostList
                postList = {postList}
                />

            </div>
            <div className="col-8">
                <Jumbotron>
                <h3>Course Information</h3>
                <div className="courseInfo">
                    Address: {address}
                    <p>Difficulty: {difficulty}</p>
                </div>
                <Map location={location} zoomLevel={17}/>
                </Jumbotron>
                
            </div>
        </div>
        </div>
        </div>
    )
}