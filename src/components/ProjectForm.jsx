import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './project.css';
import Sidebar from './Sidebar';
import { setProjectFormData } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [projectIndustry, setProjectIndustry] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const projectData = useSelector((state) => state.projectFormReducer.projectData)
  console.log("projectData",projectData);
  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
  };

  const handleStartDateChange = (date) => {
    console.log(date);
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleProjectIndustryChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setProjectIndustry(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {projectName, clientName, startDate, endDate, projectDescription, projectIndustry
    }
    console.log(data);
    // You can handle form submission logic here, e.g., sending data to an API.
    dispatch(setProjectFormData(data));
    handleShow1()
    // Reset the form fields
    setProjectName('');
    setStartDate(null);
    setEndDate(null);
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleClose1 = () => {
    navigate('/dashboard')
    setShowPopup(false)
};
  const handleShow1 = () => setShowPopup(true);

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Note: January is 0!
    const year = String(date.getFullYear()).slice(2);
  
    return `${day}/${month}/${year}`;
  }

  return (
    <>
    <Sidebar/>
    <div className="project-form">
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={handleProjectNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            // type="text"
            value={projectDescription}
            onChange={handleProjectDescriptionChange}
            cols="40"
            required
          />
        </div>
        <div className="form-group">
          <label>Client Name</label>
          <input
            type="text"
            value={clientName}
            onChange={handleClientNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectIndustry">Project Industry</label>
          <select
            // id="projectIndustry"
            // multiple
            value={projectIndustry}
            onChange={handleProjectIndustryChange}
          >
            <option value="industry1">Industry 1</option>
            <option value="industry2">Industry 2</option>
            <option value="industry3">Industry 3</option>
          </select>
        </div>
        <div className="form-group">
          <label>Project Timeline</label>
          <div className="date-picker">
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsStart
              placeholderText="Start Date"
              dateFormat="MM/dd/yyyy"
            />
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsEnd
              placeholderText="End Date"
              dateFormat="MM/dd/yyyy"
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Create Project</button>
        </div>
      </form>
    </div>
    <Modal show={showPopup} onHide={handleClose1} style={{top:'200px'}}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header> */}
        <div closeButton></div>
        <Modal.Body closeButton style={{padding:"56px", height:'200px'}}>
          <h5 style={{textAlign:'center'}}>Project Added successful.</h5>
          <p style={{textAlign:'center'}}>you can view project list</p>
          <div style={{textAlign:'center'}}>
          <Button variant="secondary" onClick={handleClose1}>
             Go to dashboard
          </Button>
          </div>
        </Modal.Body >
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
             Back
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ProjectForm;
