import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from '../Homepage'

const AllRoute = () => {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/home' component={Homepage} />
                </Switch>
            </Router>

        </div>
    );
}

export default AllRoute;