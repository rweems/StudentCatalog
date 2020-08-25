import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav'

import './App.css';
// import Route from "react-router/modules/Route";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import ViewStudents from "./components/ViewStudents";
import {BrowserRouter} from "react-router-dom";
import ViewProfStudents from "./components/ViewProfStudents";
import Navbar from "react-bootstrap/Navbar";
import Icon from "@material-ui/core/Icon";

class App extends Component {
    render() {
        return (
            <div>
            {/*<Navbar>*/}
            {/*    <Navbar.Header>*/}
            {/*        <a href="#" className="navbar-brand logo">RSUITE</a>*/}
            {/*    </Navbar.Header>*/}
            {/*    <Navbar.Body>*/}
            {/*        <Nav>*/}
            {/*            <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>*/}
            {/*            <Nav.Item>News</Nav.Item>*/}
            {/*            <Nav.Item>Products</Nav.Item>*/}
            {/*        </Nav>*/}
            {/*        <Nav pullRight>*/}
            {/*            <Nav.Item icon={<Icon icon="cog" />} >Settings</Nav.Item>*/}
            {/*        </Nav>*/}
            {/*    </Navbar.Body>*/}
            {/*</Navbar>*/}
            <Router>

                    <Switch>
                        <Route path="/students/show" component={ViewStudents}/>
                        <Route path="/professor/show" component={ViewProfStudents}/>
                        <Route path="/add" component={AddStudent} />
                    </Switch>

            </Router>
            </div>
        );
    }
}

export default App;
