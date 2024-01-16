import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => {
    return (
        <>
        <h3>Your Task List</h3>
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    <span>{task.name}</span>
                    <span>{task.dateAdded}</span>
                    <button onClick={() => toggleCompletion(task.id)} className='cmpbtn'>
                        {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => deleteTask(task.id)} className='delbtn'>Delete</button>
                </li>
            ))}
        </ul></>
    );
};

export default TaskList;
