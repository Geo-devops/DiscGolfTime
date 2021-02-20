import React, { useState } from "react";
import AUTH from "../utils/AUTH";
import Login from "../pages/Login";
import PropTypes from 'prop-types';
//  Signup function
export default function Signup({ setToken }) {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const handleLogin = async () => {
      const token = await AUTH.loginUser({
        username,
        password
      })
      setToken(token);
  }

  const handleSignup = async e => {
      e.preventDefault();
      console.log("name is " + firstname + " " + lastname);
      console.log("username is " + username)
      console.log("password is " + password);

      await AUTH.signUpUser({
        firstName: firstname,
        lastName: lastname,
        username: username,
        password: password
      })

      return handleLogin();
  };


  return (
    <div className="col-sm-6 px-5">
      <div className="m-4 text-center">
        <h3>New Users</h3>
      <hr></hr>
      </div>
      <form onSubmit={handleSignup}>
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
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};