import React from react;
import DivCards from "../components/DivCards";

//     useEffect(() => {
//         getUser()
//     }, [])
 
    //add setCourses logic
    const [courses] = useState([{
        name: "Apex Nature Park",
        address: "2600 Evans Rd, Apex, NC",
        lat: 35.714853,
        lng: -78.905551,
        difficulty: "beginner"
      },
      {
        name: "Middle Creek Disc Golf Course",
        address: "4052 Optimist Farm Rd, Apex, NC",
        lat: 35.662956,
        lng: -78.759964,
        difficulty: "beginner",
      }])
//     const [users, setUsers] = useState([])
    
//     return(
        
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            thisUser ={thisUser}
            />
            <div className="m-4">
            Welcome user: <strong>
                {thisUser.firstName} {thisUser.lastName}
                </strong>
            {courses.map( course => (
            <DivCards 
            name = {course.name}
            address = {course.address}
            lat = {course.lat}
            lng = {course.lng}
            /> 
            ))}
            {/* <Chatbox
            thisUser={thisUser}
            /> */}
     
            </div>
        </div>
    )
}

//planned to close and either populate const with all 25
//or edit user token to include all courses
//Dashboard was replaced by other components.