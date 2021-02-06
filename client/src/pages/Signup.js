import React, { useState } from "react";
import Chatbox from "../components/ChatBox";
import AUTH from "../utils/AUTH";

function Signup() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("name is " + firstname + " " + lastname);
    console.log("username is " + username)
    console.log("password is " + password);

    AUTH.signUpUser({
      firstName: firstname.trim(),
      lastName: lastname.trim(),
      username: username.trim(),
      password: password.trim()
      // newUser 
    })
    .then(() => {
      window.location.replace("/welcome")
    })
    .catch(err => console.log('OOOOOPS: ', err));

  };

  return (
    <div>
      <div className="m-4">
        <h2>Sign Up</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="container mt-3 px-5">
          <div className="row form-group">
            <div className="col" size="12">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="firstname"
                onChange={e => setFirstname(e.target.value)}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col" size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="lastname"
                onChange={e => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col" size="12">
              <input
                className="form-control"
                type="username"
                placeholder="username"
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
            Sign Up
          </button>
        <hr></hr>
        </div>
      </form>
      
      <div className="container text-center mt-4">
        Already a user?
        <span> </span>
        <a href="/login" className="login">Log In</a>
      </div>
      <Chatbox />
    </div>
  );
}

export default Signup;