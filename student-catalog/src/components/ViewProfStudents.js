import React, {Component} from "react";
import DataService from "../services/DataService";
import axios from 'axios';

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
        axios.get('http://localhost:8080/students').then(res => {
            const studentList = res.data;
            this.setState({ students: studentList });
        })
    };

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Professor View</h1>
                    <hr />
                    <h3>Students</h3>
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Id | </th>
                                <th>First Name | </th>
                                <th>Last Name |</th>
                                <th>SSN</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.students.map(
                                    (student) =>(
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.firstName}</td>
                                            <td>{student.lastName}</td>
                                            <td>{student.ssn}</td>
                                        </tr>)
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )


    }

}

export default ViewProfStudents;
