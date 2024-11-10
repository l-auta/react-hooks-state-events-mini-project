import React,{useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState('All');

  const handleTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setTaskCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(taskText, taskCategory); // Pass taskText and taskCategory to the parent
    setTaskText(''); // Clear the input field after submission
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input type="text" name="text" value={taskText} onChange={handleTextChange}/>
        <select name="category" value={taskCategory} onChange={handleCategoryChange}>
          {categories.filter(category => category !== 'All').map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
        </select>
        <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
