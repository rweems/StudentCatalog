import React, {Component} from 'react';

import './App.css';

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import AddStudent from "./components/AddStudent";
import ViewStudents from "./components/ViewStudents";

import ViewProfStudents from "./components/ViewProfStudents";

import Form from "reactstrap/es/Form";
import {Button, FormControl, Nav, Navbar} from "react-bootstrap";
import Student from "./components/Student";
import UpdateStudent from "./components/UpdateStudent";


function goToSingle(input) {
    window.location.href = "/find/" + input;

}

class App extends Component {s
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Student Catalog</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="/students/show">Student View</Nav.Link>
                        <Nav.Link href="/professor/show">Professor View</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" id="search" className="mr-sm-2" />
                        <Button variant="outline-info" onClick = {() => goToSingle(document.getElementById("search").value)}>Search</Button>
                    </Form>
                </Navbar>

                <Router>

                        <Switch>
                            <Route exact path="/"> <Redirect to="/students/show"/></Route>
                            <Route path="/students/show" component={ViewStudents}/>
                            <Route path="/professor/show" component={ViewProfStudents}/>
                            <Route path="/add" component={AddStudent} />
                            <Route path="/find/:id" component={Student}  />
                            <Route path="/update/:id" component={UpdateStudent} />
                        </Switch>

                </Router>
            </div>
        );
    }
}

export default App;
