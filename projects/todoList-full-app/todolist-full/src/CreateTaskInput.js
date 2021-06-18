import React, { Component } from "react";


class CreateTaskInput extends Component {
    state = {
        value: '',
    }

    handleChange = (e) => {
        console.log('input');
        const { text, value } = e.target;
        this.setState({
         value: e.target.value
        })
    };
    handleTaskCreate = (e) => {
        e.preventDefault();
        console.log('click', this.state);

    }
    render() {
        return (
            <div className='create-task'>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.value}
                    className='create-task__input' />
                <button
                    onClick={this.handleTaskCreate}
                    className='create-tack__btn'
                >Create</button>
            </div>
        )

    }

}



export default CreateTaskInput


// 1. Take  taxt from input
// 2. Create task with this text
// 3. Add create task to the list 
