import React, { useState } from "react";
import AUTH from "../utils/AUTH";
import Signup from "../components/Signup"
import PropTypes from 'prop-types';


export default function Login ({ setToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
        e.preventDefault();

        console.log("username is " + username)
        console.log("password is " + password);
        try {
            const token = await AUTH.loginUser({
                username,
                password
            })
            setToken(token)
            // console.log(token);
        }
        catch(err) {
            console.log('Login error: ', err)
            alert ('Incorrect username or password')
        }
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center m-4">Welcome to Tee Time! Test 12</h1>
                <div className="row">
                    <div className="col-sm-6 px-5">
                        <div className="m-4 text-center">
                            <h3>Log In</h3>
                            <hr></hr>
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
                            </div>
                        </form>
                    </div>
                    <Signup setToken={setToken} />
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};