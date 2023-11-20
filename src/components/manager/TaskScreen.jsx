import React from "react";
import Sidebar from "../Sidebar";
import "./common.css";

const TaskScreen = () => {
  return (
    <>
      <Sidebar />
      <div className="layout">
        {/* <div className="p-content"> */}
        <div className="search">
          <div className="search-box">
            <input
              className="form-control abc"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div>
            <button className="common-btn">create</button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-2" style={{ textAlign: "center" }}>
              {/* Content for the first column */}
              <button className="btn-list">List</button>
            </div>
            <div className="col-sm-2">
              {/* Content for the second column */}
              <button className="btn-board">Board</button>
            </div>
            <div className="col-sm-8">
              {/* Content for the third column */}
              <button className="btn-filter">Filter Option</button>
            </div>
          </div>
        </div>
        {/* <div className='btn-section'>
        <div>
            <button>List</button>
        </div>
        <div>
            <button>Board</button>
        </div>
        <div><button>filter Option</button></div>
    </div> */}
        <h4 className="project-heading"> - Project A</h4>
        <div className="task-container">
          <div className="task-box">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Task Name</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Est. Time</th>
                    <th>Log Time</th>
                    <th>Assigned To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{""}</th>
                    <td style={{ width: "26%" }}>
                      {/* <div> */}
                      Do the user research to create wireframe
                      {/* </div> */}
                    </td>
                    <td>16, Nov</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "red",
                          borderRadius: "7px",
                          width: "75px",
                          textAlign: "center",
                        }}
                      >
                        High
                      </div>
                    </td>
                    <td>today</td>
                    <td>today</td>
                    <td>smith</td>
                  </tr>
                  <tr>
                    <th>{""}</th>
                    <td>Do the user research to create wireframe</td>
                    <td>21, Oct</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "Yellow",
                          borderRadius: "7px",
                          width: "75px",
                          textAlign: "center",
                        }}
                      >
                        Average
                      </div>
                    </td>
                    <td>today</td>
                    <td>today</td>
                    <td>smith</td>
                  </tr>
                  <tr>
                    <th>{""}</th>
                    <td>Do the user research to create wireframe</td>
                    <td>24, Oct</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "green",
                          borderRadius: "7px",
                          width: "75px",
                          textAlign: "center",
                        }}
                      >
                        Low
                      </div>
                    </td>
                    <td>today</td>
                    <td>today</td>
                    <td>smith</td>
                  </tr>
                </tbody>
                <tr>
                  <th>{""}</th>
                  <td>
                    <button>+</button>Add task
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <h4 className="project-heading"> - Project B</h4>

        <div className="task-container">
          <div className="task-box">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Task Name</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Est. Time</th>
                    <th>Log Time</th>
                    <th>Assigned To</th>
                  </tr>
                </thead>
                {/* <div> */}
                <tbody>
                  <tr>
                    <th>{""}</th>
                    <td style={{ width: "26%" }}>
                      {/* <div> */}
                      Do the user research to create wireframe
                      {/* </div> */}
                    </td>
                    <td>16, Nov</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "red",
                          borderRadius: "7px",
                          width: "75px",
                          textAlign: "center",
                        }}
                      >
                        High
                      </div>
                    </td>
                    <td>today</td>
                    <td>today</td>
                    <td>smith</td>
                  </tr>
                  <tr>
                    <th>{""}</th>
                    <td>Do the user research to create wireframe</td>
                    <td>21, Oct</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "Yellow",
                          borderRadius: "7px",
                          width: "75px",
                          textAlign: "center",
                        }}
                      >
                        Average
                      </div>
                    </td>
                    <td>today</td>
                    <td>today</td>
                    <td>smith</td>
                  </tr>
                  <tr>
                    <th>{""}</th>
                    <td>Do the user research to create wireframe</td>
                    <td>24, Oct</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "green",
                          borderRadius: "7px",
                          width: "75px",
                          textAlign: "center",
                        }}
                      >
                        Low
                      </div>
                    </td>
                    <td>today</td>
                    <td>today</td>
                    <td>smith</td>
                  </tr>
                  <tr>
                    <th>{""}</th>
                    <td>Do the user research to create wireframe</td>
                    <td>24, Oct</td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "green",
                          borderRadius: "7px",
                          width: "75px",
                          textAlign: "center",
                        }}
                      >
                        Low
                      </div>
                    </td>
                    <td>today</td>
                    <td>today</td>
                    <td>smith</td>
                  </tr>
                  <tr>
                    <th>{""}</th>
                    <td>
                      <button>+</button>Add task
                    </td>
                  </tr>
                </tbody>
                {/* </div> */}
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default TaskScreen;
