import { useState } from "react";
import { Task } from "../utils/data-tasks";

// these icons could be in their own files if they were ever used outside the scope of this component
const lowPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM7 9a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
</svg>
const mediumPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM7 9a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
</svg>
const highPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM7 9a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" />
</svg>

const TaskCard = ({ task, updateTask }: {
  task: Task,
  updateTask: (updatedTask: Task) => void
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false); // [value, setValue
  const points = task.points || 0; // x, setX is the convention for useState
  const updatePoints = (direction: 'up' | 'down') => {
    const fib = [0, 1, 2, 3, 5, 8, 13];
    const index = fib.indexOf(points);
    const nextIndex = direction === 'up' ? index + 1 : index - 1;
    const newPoints = fib[nextIndex] || 0;

    if (newPoints) { updateTask({...task, points: newPoints}) }
  }
  
  return (
  <div className="border rounded-lg px-2 m-2 bg-gray-50 w-56">
    <div className="text-base font-base py-2">
    {isEditingTitle ? ( 

      <input 
        className="w-full"
        value={task.title}
        onChange={(e) => {updateTask({...task, title: e.target.value})}}
        onBlur={() => {setIsEditingTitle(false)}}
        autoFocus
      />

     ) : (
      <div onClick={() => {setIsEditingTitle(true)}}>{task.title}</div>
    )}
    </div>
    <div className="flex gap-4 justify-between py-2 text-gray-500 text-sm">
      <div className="flex gap-2">
        <div>{task.id}</div>
        <div>{task.priority}</div>
        {task.priority === "high" && highPriorityIcon}
        {task.priority === "medium" && mediumPriorityIcon}
        {task.priority === "low" && lowPriorityIcon}
      </div>
      <div className="flex gap-2 items-center">
        <button onClick={() => { updatePoints('down') }}>-</button>  
        <div className="font-bold">{points}</div>
        <button onClick={() => { updatePoints('up') }}>+</button>  
      </div>
    </div>
  </div>
  )
};

export default TaskCard;
