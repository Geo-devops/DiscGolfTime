import React, { useState } from "react";
import AUTH from "../utils/AUTH";
import PropTypes from 'prop-types';


export default function Login ({ setToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
        e.preventDefault();

        console.log("username is " + username)
        console.log("password is " + password);

        const token = await AUTH.loginUser({
          username,
          password
        })
        // .then(results => {
        //     const loggedInUser = results.data.user
        //     console.log('loggedInUser: ', loggedInUser);
        // })       
        setToken(token);
            
        // window.location.replace("/welcome");
        // .catch(err => console.log('OOOOOPS: ', err));
    }


    return (
        <div>
            <div className="m-4">
                <h2>Log In</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="container mt-3 px-5">
                    <div className="row form-group">
                        <div className="col" size="12">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={e => setUsername(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col" size="12">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        </div>
                    </div>
                <button className="btn btn-success" type="submit">
                    Log In
                </button>
                <hr></hr>
                </div>
            </form>
            <div className="container text-center mt-4">
                New To Tee Time?
                <span> </span>
                <a href="/" className="signup">Sign Up</a>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};