import React from "react";
import Sidebar from "../Sidebar";
import "./index.css";
const ProjectList = () => {
  return (
    <>
      <Sidebar />
      <div className="layout">
      <div className="header">
          <h2>Projects</h2>
        </div>
        <div style={{marginTop:'100px'}}>
        <>
              <div className="project-list1">project 1</div>
            </>
            <>
              <div className="project-list1">project 2</div>
            </>
            <>
              <div className="project-list1">project 3</div>
            </>
            <>
              <div className="project-list1">project 4</div>
            </>
            <>
              <div className="project-list1">project 5</div>
            </>
            <>
              <div className="project-list1">project 6</div>
            </>
            
        {/* {[1, 1, 1, 1, 1, 1].map((data) => {
          return (
            <>
              <div className="project-list1">project 1</div>
            </>
          );
        })} */}
      </div>
      </div>
    </>
  );
};

export default ProjectList;
