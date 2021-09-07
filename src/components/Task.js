import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle })  => {
    return (
        <div className={`task__wrapper ${task.isCompleted ? 'task_completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3
                className="task-description">
                    {task.text} 
                    <FaTimes 
                        className="clickable__icon delete__icon"
                        onClick={()=> onDelete(task.id)}
                    />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
