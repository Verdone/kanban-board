import "./App.css";
import { useState } from "react";
import { tasks as initialTasks, statuses, Task } from "./utils/data-tasks";
import TaskCard from "./components/TaskCard";

function App() { 

  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: tasksInColumn
    }
  })

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t
    })
    setTasks(updatedTasks)
  }

  return (
  <div className="flex divide-x">
    {columns.map((column) => (  
        <div>
          <h2 className="text-3xl p-2 capitalize font-bold text-gray-500">{column.title}</h2>
          {column.tasks.map((task) => (
             <TaskCard 
              task={task}
              updateTask={updateTask}
              />
          ))}
        </div>
    ))}
  </div>
  );



}

export default App;
