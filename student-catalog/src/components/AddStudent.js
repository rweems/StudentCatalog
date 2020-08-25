import React, {Component} from "react";

class AddStudent extends Component {

    toggleForm = () => {
        this.setState((state, props) => {
            return ({ isFormDisplayed: !state.isFormDisplayed })
        })
    }

    render() {
        return (
            <div>
                <button>Add student</button>
            </div>
        )


    }

}

export default AddStudent;
