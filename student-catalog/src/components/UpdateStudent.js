import React, {Component} from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";

class UpdateStudent extends Component {

    state = {
        firstName: '',
        lastName: '',
        ssn: ''
    };
    studentId;


    handleUpdate = (event) => {
        event.preventDefault();

        const student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            ssn: this.state.ssn
        };
        axios.put(`http://localhost:8080/update/${this.props.match.params.id}`, student)
            .then(response => {
                console.log(response)
                console.log(response.data)
            });
        this.props.history.push('/students/show');

    };

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            });
    };

    render() {
        return (
            <div>
                <h2>Update Form</h2>
                <form onSubmit={this.handleUpdate}>

                    <label>
                        First Name: <input type="text" name="firstName" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Last Name: <input type="text" name="lastName" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        SSN: <input type="text" name="ssn" onChange={this.handleChange} maxLength={4}/>
                    </label>
                    <br/>
                    <Button variant="outline-secondary" type="submit">Update Student</Button>
                </form>
            </div>
        )


    }


}

export default UpdateStudent;
