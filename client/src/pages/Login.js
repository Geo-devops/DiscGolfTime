import React, { useState } from "react";
import Chatbox from "../components/ChatBox"
import AUTH from "../utils/AUTH"

function Login (props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username)
        console.log("password is " + password);

        AUTH.loginUser({
          username: username.trim(),
          password: password.trim()
        })
        .then(() => {
            window.location.replace("/welcome");
            console.log(username);
            props.setLoggedInUser(username);
        })
        .catch(err => console.log('OOOOOPS: ', err));
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
                </div>
            </form>
            <Chatbox />
            <div className="container text-center mt-4">
                New To Tee Time?
                <span> </span>
                <a href="/signup" className="signup">Sign Up</a>
            </div>
        </div>
    )
}

export default Login;