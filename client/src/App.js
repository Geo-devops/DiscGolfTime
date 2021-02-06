import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import './App.css';

function App() {

  // const [loggedInUser, setLoggedInUser] = useState();

  return (
    <Router>
      <div>
        <Navbar />
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
