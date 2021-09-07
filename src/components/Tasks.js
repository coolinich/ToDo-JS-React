import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
    const uncomplitedTasks = tasks
        .filter((task) => task.isCompleted === false);
    const complitedTasks = tasks
        .filter((task) => task.isCompleted === true);
    return (
        <>
            {
                uncomplitedTasks.length > 0 ?
                    (uncomplitedTasks
                        .map((task) => (
                            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                        ))) :
                    (`You don't have uncomplited tasks`)    
            }
            {complitedTasks.length > 0 && <h3 className="tasks__list">Completed tasks</h3>}
            { 
                complitedTasks.length > 0 &&
                (  
                    complitedTasks
                    .map((task) => (
                        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                    ))
                )    
            }
        </>
    )
}

export default Tasks
