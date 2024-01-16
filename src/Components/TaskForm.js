import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: taskName,
        dateAdded: new Date().toLocaleString(),
        completed: false,
      };
      addTask(newTask);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Your Task Here:</label><br/><br/>
        <input type="text" value={taskName} onChange={handleInputChange} />
      
<button type="submit" className='btn'>Add Task</button>

    </form>
  );
};

export default TaskForm;
