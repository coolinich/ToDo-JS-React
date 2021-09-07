import React from 'react'
import Button from './Button'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'

const Header = ({ onAddTask, showAddTaskForm }) => {
    return (
        <div className="header">
            <h1>Tasks tracker</h1>
            <Button
                btnTypeClass="primary"
                text={showAddTaskForm ?
                    <div className="btn__caption">
                        <span>Close</span>
                        <FaAngleDown /> 
                    </div> :
                    <div className="btn__caption">
                        <span>Add Task</span>
                        <FaAngleRight /> 
                    </div>
                }
                onClick={onAddTask}/>
        </div>
    )
}

export default Header
