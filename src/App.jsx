import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);  // Changed to plural 'tasks'
  const [input, setInput] = useState('');

  const addTask = () => {  // Fixed function name casing
    if (input.trim()) {  // Changed from inputValue to input
      setTasks([...tasks, input]);  // Fixed array spread syntax
      setInput('');
    }
  };

  return (
    <div>
      <h1>To do list</h1>
      <div>
        <input
          type='text'
          value={input}  // Changed from inputValue to input
          onChange={(e) => setInput(e.target.value)}
          placeholder='add task'
          onKeyPress={(e) => e.key === 'Enter' && addTask()}  // Added Enter key support
        />
        <button onClick={addTask}>add</button>  // Fixed function name
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (  // Changed from task to tasks
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;