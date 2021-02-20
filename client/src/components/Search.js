import React, { useState, useEffect } from 'react';
import API from "../utils/API"
import { useHistory } from 'react-router-dom'

export default function Search () {
    const history = useHistory()

    const [searchValue, setSearchValue] = useState();
    const [allCourses, setAllCourses] = useState();
    const [searchResults, setSearchResults] = useState();

    const getCourses = async e => {
        const courses = await API.getAllCourses()
        setAllCourses(courses.data);
    }
    
    const courseSearch = async e => {
        e.preventDefault();
        let results = []
        console.log('Search clicked!');
        console.log('search value: ', searchValue)
        console.log( 'from courseSearch, allcourses: ', allCourses);
        for (let i = 0; i < allCourses.length; i++) {
            const lowerCaseCourseNames = allCourses[i].name.toLowerCase();
            // console.log(lowerCaseCourseNames)
            if (lowerCaseCourseNames === (searchValue.toLowerCase())) {
                // console.log('We have an inclusion match: ', allCourses[i].name);
                // console.log(allCourses[i])
                results.push(allCourses[i])
            }
        }
        console.log('!!!!', results)
        setSearchResults(results);
    }

    useEffect(() => {
        getCourses()
        setSearchResults()
    }, [])

    const handleClick = result => {
        console.log('click ', result)
        history.push('/course', result)
    }

    if (!searchResults) {

        return (
            <div>
                <form onSubmit={courseSearch} className = "form-inline">
                    <div className="form-group">
                        <input type="search" className="form-control" id="courseSearchID" placeholder="Course Search" onChange={e => setSearchValue(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-success ml-1">Search</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <form onSubmit={courseSearch} className = "form-inline">
                    <div className="form-group">
                        <input type="search" className="form-control" id="courseSearchID" placeholder="Course Search" onChange={e => setSearchValue(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-success ml-1">Search</button>
                </form>
                <div className="searchResultList mt-2">
                    {searchResults.map(result => (
                        <div className = "row ml-1" key={result._id}>
                            <button onClick={() => handleClick(result)} className="searchResultItem btn">
                                <div className="courseName">
                                    {result.name}
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}