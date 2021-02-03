import React, { useState } from "react";
import Chatbox from "../components/ChatBox"
import API from "../utils/API"

function Signup() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("name is " + firstname + " " + lastname);
    console.log("email is " + email)
    console.log("password is " + password);

    const userData = {
      firstName: firstname.trim(),
      lastName: lastname.trim(),
      email: email.trim(),
      password: password.trim()
    };

    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }

    signUpUser(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
  };

  const signUpUser = (firstName, lastName, email, password) => {

    console.log('UserData: ', firstName + lastName + email + password);
    
    API.signUpUser(firstName, lastName, email, password)
    .then(() => {
      console.log('user created YEEEE', firstName)
    })
    .catch(handleLoginErr)
  }

  function handleLoginErr() {
    console.log('User was not created!');
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
                type="email"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
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
      <Chatbox />
    </div>
  );
}

export default Signup;
