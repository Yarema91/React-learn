import React from 'react';
import classNames from 'classnames';

const Tasks = ({ done, text}) => {
    // const listItemClasses= `list-item ${done ? 'list-item__done' : ''}`
    const listItemClasses = classNames('list-item', {'list-item__done' : done}); //2 спосіб, кращий
    return (
            <li  className={listItemClasses}>
                        <input type="checkbox" 
                        className='list-item__checkbox'
                        value={done} 
                        />
                        <span className='list-item__text'>{text}</span>
                        <button className='list-item__delete-btn'></button>
                    </li>
       
    )
}

export default Tasks
