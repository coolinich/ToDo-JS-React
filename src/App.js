import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Go to doctor',
        day: 'Sep 7th at 2:30pm',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Go to shop',
        day: 'Sep 8th at 2:30pm',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Go to cinema',
        day: 'Sep 9th at 5:30pm',
        isCompleted: true
    }
])
  
  const addTask = (task) => {
      const newTask = {...task, isCompleted: false, id: Math.floor(Math.random() * 10000) + 1};
      console.log(newTask);
      setTasks([...tasks, newTask]);
  }


  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleIsCompleted = (id) => {
      setTasks(tasks.map((task) => 
        task.id === id ?
          {...task, isCompleted: !task.isCompleted} :
          task
        )
  )
  }

  return (
    <div className="container">
        <Header onAddTask={() => setShowAddTaskForm(!showAddTaskForm)} showAddTaskForm={showAddTaskForm} />
        {showAddTaskForm && <AddTaskForm onAdd={ addTask } />}
        {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleIsCompleted}/>) :
        ('No tasks to be shown')
        }
    </div>
  );
}

export default App;
