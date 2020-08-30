import React, {Component} from "react";

import axios from 'axios';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faUserEdit} from '@fortawesome/free-solid-svg-icons';


class ViewStudents extends Component {

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
        axios.get('http://localhost:8080/students').then(res => {
            const studentList = res.data;
            this.setState({students: studentList});
        })
    };

    deleteStudent = (id) => {
        axios.delete(`http://localhost:8080/delete/${id}`).then(res => {
            console.log("student deleted");
            window.location.reload(true);
        })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <h1>Student View</h1>
                    {/*<Link to="/add" className="btn btn-outline-secondary">Add Student</Link>*/}
                    <Button variant="outline-dark" onClick={event => window.location.href = '/add'}>Add Student</Button>
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
                                <th/>
                                <th/>
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
                                            <td><Button variant="outline-secondary"
                                                        onClick={() => window.location.href = `/update/${student.id}`}>
                                                <FontAwesomeIcon icon={faUserEdit}/>
                                            </Button></td>
                                            <td><Button variant="outline-danger"
                                                        onClick={() => this.deleteStudent(student.id)}>
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </Button></td>

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

export default ViewStudents;
