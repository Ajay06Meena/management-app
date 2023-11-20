import React from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from "react-router-dom";
import './project.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
const Projects = () => {
    const navigate = useNavigate();

    const projectsData = [
        {
          title: 'Project 1',
          description: 'Description for Project 1',
          deadline: '2023-12-31',
        },
        {
          title: 'Project 2',
          description: 'Description for Project 2',
          deadline: '2023-11-15',
        },
        // Add more projects as needed
      ];

      const recentActivityData = [
        { user: 'User 1', action: 'liked your post', timestamp: '2 hours ago' },
        { user: 'User 2', action: 'commented on your photo', timestamp: '3 hours ago' },
        { user: 'User 2', action: 'commented on your photo', timestamp: '3 hours ago' },
        { user: 'User 2', action: 'commented on your photo', timestamp: '3 hours ago' },
        { user: 'User 2', action: 'commented on your photo', timestamp: '3 hours ago' },
        { user: 'User 2', action: 'commented on your photo', timestamp: '3 hours ago' },

        // Add more activity items here
      ];

      const handleProject = () => {
        console.log("project");
        navigate("/projects/form")
      }
  return (
    <>
    <Sidebar/>
    <div className="layout">
        <div className='header-btn'>
            <button className='head-btn'>Overview</button>
            <button className='head-btn'>task</button>
            <button className='head-btn'>Documents</button>
            <button className='head-btn'>meeting</button>
            <button className='head-btn'>timeline</button>
            <button className='create-btn' onClick={handleProject}>Create Project</button>
        </div>
        <div className='section'>
        <div className='pending-task'>
            <h6>pending task</h6>
        </div>
        <div className='recent-activity'>
            <h6>recent activity</h6>
            <ListGroup>
      {recentActivityData.map((activity, index) => (
        <ListGroupItem key={index}>
          <span>{activity.user}</span> {activity.action} <span>{activity.timestamp}</span>
        </ListGroupItem>
      ))}
    </ListGroup>
        </div>
        </div>
        <div className='upcoming'>
        <h6>Upcoming meetings</h6>
        <ScheduleComponent height='270px'>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>
        </div>
        </div>
    {/* <div className="dashboard">
      <h1>Project Dashboard</h1>
      <div className="project-list">
        {projectsData.map((project, index) => (
           <div className="project-card" role="button" onClick={handleProject}>
           <h2>{project.title}</h2>
           <p>{project.description}</p>
           <p>Deadline: {project.deadline}</p>
         </div>
        ))}
      </div>
    </div> */}
    {/* </div> */}
    </>
  )
}

export default Projects