import React, { Component } from "react"
import Tasks from "./Tasks"
import CreateTaskInput from "./CreateTaskInput"

class TaskList extends Component {
    state = {
        tasks: [
            { text: 'Buy milk', done: false, id: 1 },
            { text: 'Buy bread', done: false, id: 2 },
            { text: 'Buy beer', done: true, id: 3 },
            { text: 'Buy cigarete', done: true, id: 4 },
        ]
    }
    onCreate= ({value}) => (

    )
    
    render() {
        return (
            <div className='todo-list'>
                <CreateTaskInput onCreate={this.onCreate}/>
                <ul className='list'>
                    {this.state.tasks.map(task => (
                        <Tasks
                        key={task.id}
                        {...task}
                            // done={task.done}
                            // text={task.text}
                        />
                    )
                    )}
                </ul>
            </div>
        )
    }
}

export default TaskList
