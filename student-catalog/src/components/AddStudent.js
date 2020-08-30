import React, {Component, useState} from "react";
import axios from 'axios';
import {Redirect} from "react-router";
import ViewStudents from "./ViewStudents";
import Button from "react-bootstrap/Button";

class AddStudent extends Component {

    state = {
        firstName: '',
        lastName: '',
        ssn: '',
        redirect: false
    };



    handleSubmit = (event) => {
        event.preventDefault();

        const student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            ssn: this.state.ssn
        };
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.ssn);
        axios.post('http://localhost:8080/add', student )
            .then(response => {
                console.log(response)
                console.log(response.data)
            });

        window.location.href = "/students/show";
    };


    handleChange = (event) =>{
        this.setState(
            {
                [event.target.name]: event.target.value
            });
    };

    render() {
        return (
            <div>
                <h2>Student Form</h2>
                <form onSubmit = {this.handleSubmit}>

                    <label>
                        First Name: <input type="text" name="firstName" onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>
                        Last Name: <input type="text" name="lastName" onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>
                        SSN: <input type="text" name="ssn" onChange={this.handleChange} maxLength={4}/>
                    </label>
                    <br/>
                    <Button variant="outline-success" type="submit">Add Student</Button>
                </form>
            </div>
        )


    }



}

export default AddStudent;
