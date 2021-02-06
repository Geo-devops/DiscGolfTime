import React, {useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import './App.css';

function App() {

  const [token, setToken] = useState();

  // If you don't have a token, and the address ends in /welcome, then go back to login
    // This allows the user to access both login and signup without a token. It only prohibits welcome
  if (!token && (window.location.pathname === "/welcome")) {
    console.log('Condition met');
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path ="/welcome" component={Dashboard} />
        </Wrapper>
        
      </div>
    </Router>
  );
}

export default App;
