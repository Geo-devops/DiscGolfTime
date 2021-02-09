import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import './App.css';
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div>
        <Wrapper>
          
          <Route exact path="/login" component={Login} />
          <Route exact path ="/" component={Dashboard} />
        </Wrapper>
        
      </div>
    </Router>
  );
}

export default App;
