import React, {Component} from "react";

import axios from 'axios';


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
            this.setState({ students: studentList });
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
                    <button onClick={event =>  window.location.href='/add'}>Add Student</button>
                    <hr />
                    <h3>Students</h3>
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Id </th>
                                <th>First Name </th>
                                <th>Last Name</th>
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
                                            <td><button onClick={() => window.location.href=`/update/${student.id}`}>Edit</button></td>
                                            <td><button onClick={() => this.deleteStudent(student.id)}>Delete</button></td>
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

export default ViewStudents;
