// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import UserNavbar from "../components/Navbar"
// import AUTH from "../utils/AUTH"
// import SearchMap from "../components/SearchMap"
// import CoursePage from "../components/CoursePage";

// import Wrapper from "../components/Wrapper";

// // import Search from "../components/Search"
// // import Map from "../components/Map"
// // import Chatbox from "../components/ChatBox";

// export default function Dashboard () {

//     const [thisUser, setThisUser] = useState([])

//     const getUser = async e => {
//         const thisUserID = localStorage.token.slice(10,34)
//         // console.log('ThisUserID: ', thisUserID)

//         // e.preventDefault()
//         const user = await AUTH.getOneUser(thisUserID)
//         // console.log('USER.data:', user.data);
//         setThisUser(user.data)
//     }
    

//     useEffect(() => {
//         getUser()
//     }, [])


//     const [users, setUsers] = useState([])
    
//     return(
        
//         <div>
//             <UserNavbar
//             users={users}
//             setUsers={setUsers}
//             thisUser ={thisUser}
//             />
//             <Router>
//                 <div className = "container">
//                     <Wrapper>
//                    {/*  <Route path='/searchmap' component={SearchMap} />
//                     <Route path="/course" component={CoursePage} /> 
//                     {/* <CoursePage.js /> */}
//                     </Wrapper>
//                 </div>
//             </Router>
//         </div>
//     )
// }