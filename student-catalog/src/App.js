import React, {Component} from 'react';

import './App.css';
// import Route from "react-router/modules/Route";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import ViewStudents from "./components/ViewStudents";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/view" component={ViewStudents}/>
                        <Route path="/add" component={AddStudent} />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
