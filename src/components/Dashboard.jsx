import React, {useState} from "react";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import {
  GanttComponent,
  TaskFieldsModel,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-gantt";
import { projectData } from "./data";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [data, setData] = useState([]);
  const projectDetails = useSelector(
    (state) => state.projectFormReducer.projectData
  );
  const taskDetails = useSelector((state) => state.taskFormReducer.task);
  const navigate = useNavigate();

  console.log("Dashboard", taskDetails);
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Note: January is 0!
    const year = String(date.getFullYear()).slice(2);

    return `${day}/${month}/${year}`;
  }
  const taskValues = {
    id: "TaskID",
    name: "taskName",
    startDate: "startDate",
    endDate: "endDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predeceesor",
  };

  const handleData = (event) => {
    setData([...data, event]);
  };

  console.log("meeting",data);
  const handler = () => {
    navigate("/board");
  };

  return (
    <>
      <Sidebar />
      <div className="layout">
        <div className="dash">
          <div className="box-item">
            <div>
              <h4>Overview</h4>
            </div>
            <div>
              <button className="btn1">Button</button>
              <button
                className="btn2"
                onClick={() => {
                  navigate("/form");
                }}
              >
                Create
              </button>
            </div>
          </div>
          <div>
            <GanttComponent dataSource={taskDetails} taskFields={taskValues}>
              <ColumnsDirective>
                <ColumnDirective
                  field="TaskID"
                  headerText="ID"
                ></ColumnDirective>
                <ColumnDirective
                  field="taskName"
                  headerText="Name"
                ></ColumnDirective>
                <ColumnDirective
                  field="startDate"
                  format="yy-MMM-dd"
                ></ColumnDirective>
                <ColumnDirective
                  field="Duration"
                  textAlign="Right"
                ></ColumnDirective>
              </ColumnsDirective>
            </GanttComponent>
          </div>
        </div>
        <div className="details">
          <div className="project-data">
            <h4>Projects</h4>
            <div className="project-item" style={{ fontWeight: "600" }}>
              <p> client name </p>
              <p> project name </p>
              <p> start date </p>
              <p> end date </p>
            </div>
            {projectDetails?.map((i) => (
              <div className="project-item" onClick={handler} role="button">
                <p> {i.clientName} </p>
                <p> {i.projectName} </p>
                <p> {formatDate(i.startDate)} </p>
                <p> {formatDate(i.endDate)} </p>
              </div>
            ))}
          </div>
          <div className="project-data1">
            <h4>Schedule</h4>
            <div>
              <ScheduleComponent
                height="270px"
                currentView="Month"
                eventSettings={{ dataSource: data }}
                actionComplete={handleData}
              >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
              </ScheduleComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

//create a project dash and calender in syncvf meet
