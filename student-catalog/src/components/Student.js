import React, {Component} from "react";

import axios from 'axios';
import {listStudents} from "../graphql/queries";


class Student extends Component {

    constructor(props) {
        super(props);
        this.display();
    }

    state = {
        student: {
            id: '',
            firstName: '',
            lastName: ''
        },
        students: []
    };




    display = () => {

        axios.get(`http://localhost:8080/find/${this.props.match.params.id}`).then(res => {
            const newStudent = res.data;
            this.setState({ student: newStudent });
        });
    };


    render() {
        return (
            <div>

                <div className="container">
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th> <h3>{this.state.student.lastName}, {this.state.student.firstName}</h3></th>

                            </tr>
                            </thead>
                            <tbody>
                                <tr><h4>Id: {this.state.student.id}</h4></tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )


    }

}

export default Student;
