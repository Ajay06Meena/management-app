import React, { useState } from 'react';
import './TaskForm.css'; // Import your CSS file
import { useDispatch, useSelector } from "react-redux";
import { setTaskFormData } from '../redux/action';

function App() {
  const dispatch = useDispatch();
  const taskDetails = useSelector(
    (state) => state.taskFormReducer.task
  );
  console.log("taskDetails",taskDetails);
  const [formData, setFormData] = useState({
    TaskID: '',
    taskName: '',
    startDate: '',
    endDate: '',
    // subtasks: [{}],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log("taskDetails",taskDetails);


  const handleSubtaskChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSubtasks = [...formData.subtasks];
    updatedSubtasks[index][name] = value;
    setFormData({
      ...formData,
      subtasks: updatedSubtasks,
    });
  };

  // const addSubtask = () => {
  //   setFormData((prevTask) => ({
  //     ...prevTask,
  //     subtasks: [...prevTask.subtasks, { subtaskName: '', subtaskDescription: '' }],
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    dispatch(setTaskFormData(formData));
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1>Task Form</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="TaskID">Task Id:</label>
          <input
            type="text"
            id="TaskID"
            name="TaskID"
            value={formData.TaskID}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={formData.taskName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>Subtasks:</label>
          {formData.subtasks.map((subtask, index) => (
            <div key={index} className="subtask">
              <input
                type="text"
                name="subtaskName"
                placeholder="Subtask Name"
                value={subtask.subtaskName || ''}
                onChange={(e) => handleSubtaskChange(index, e)}
              />
              <input
                type="text"
                name="subtaskDescription"
                placeholder="Subtask Description"
                value={subtask.subtaskDescription || ''}
                onChange={(e) => handleSubtaskChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={addSubtask}>
            Add Subtask
          </button>
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
