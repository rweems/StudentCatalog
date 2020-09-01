import React, {Component} from "react";

import axios from 'axios';
import {Table} from "react-bootstrap";

class ViewProfStudents extends Component {

    constructor(props) {
        super(props);
        this.display();
    }

    state = {
        student: {
            id: '',
            firstName: '',
            lastName: '',
            ssn: ''
        },
        students: []
    };


    display = () => {
        axios.get('http://localhost:8081/professor').then(res => {
            const studentList = res.data;
            this.setState({students: studentList});
        })
    };

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Professor View</h1>
                    <br/>
                    <br/>
                    <h3>Students</h3>
                    <div className="container">
                        <Table className="table" striped>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>SSN</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.students.map(
                                    (student) => (
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.firstName}</td>
                                            <td>{student.lastName}</td>
                                            <td>***-**-{student.ssn}</td>
                                        </tr>)
                                )
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )


    }

}

export default ViewProfStudents;
