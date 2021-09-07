import { useState } from "react"

const AddTaskForm = ({onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please, enter task description');
            return;
        }

        onAdd({ text, day });
        setText('');
        setDay('');
    }

    return (
        <form className="add-task__form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="add-task">Task description</label>
                <input
                    type="text"
                    id="add-task"
                    placeholder="Add task description"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="set-datetime">Day and Time</label>
                <input
                    type="text"
                    id="set-datetime"
                    placeholder="Set Day and Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <input type="submit" className="btn regular" value="Save Task" disabled={!text} />
        </form>
    )
}

export default AddTaskForm