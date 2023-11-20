import React from 'react'
import Button from "react-bootstrap/Button";
import Sidebar from '../../Sidebar'
import '../common.css';
import { useNavigate } from "react-router-dom";

const ProjectScreen = () => {
    const navigate = useNavigate();

    const handler = () => {
        navigate("/createproject")
    }
  return (
    <>
    <Sidebar/>
    <div className='layout'>
    <div className="project-content">
        {
          [1,1,1,1,1].map((data) => {
            return (
              <div className="conbox">
                <div className="sub-box">
                    <h5>Project A</h5>
                    <div className='project-status'> 
                    <h6 className='status'>Active</h6>
                    <h6 className='progress1'>Complete</h6>
                    </div>
                    <h5>Recent Activity</h5>
                    <p>you just completed your task </p>
                    <div className='size'>
                        <h6>Team</h6>
                        <h6>Client</h6>
                    </div>
                </div>
              </div>
            );
          })}
          <div className="add-box" style={{padding:'100px'}}>
          <button onClick={handler} className='add-btn'>Add Project</button>
        </div>
       

        
      </div>
    </div>
    </>
  )
}

export default ProjectScreen