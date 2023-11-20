import React from "react";
import Sidebar from "../../Sidebar";
import { useNavigate } from "react-router-dom";

const Documents = () => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <div className="layout">
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
        <div className="docs-container">
          <div className="docs-header">
            <h4>Your Activity</h4>
            <button className="task-btn">View All</button>
          </div>
          <div className="documents-list">
            <h6 role="button" onClick={() => {navigate("/documents/proposal")}}>Proposal</h6>
            <h6>SOW</h6>
            <h6>Contract</h6>
            <h6>Kick off Deck</h6>
            <h6>Design Feedback</h6>
            <h6>SOW</h6>
            <h6>Contract</h6>
          </div>
        </div>
        <div className="docs-activity">
          <div className="header-line">
            <h5>Recent Activity</h5>
            <button className="task-btn">Filter</button>
          </div>
          <div className="table-container">
            <table className="table-section">
              <thead>
                <tr>
                  <th></th>
                  <th>Document Name</th>
                  <th>Modified Date</th>
                  <th>Project Name</th>
                  <th>Activity</th>
                  <th>By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{""}</th>
                  <td style={{ width: "26%" }}>
                    Sample Document
                  </td>
                  <td>10-03-2023, 10:05</td>
                  <td>Project A</td>
                  <td>Edit</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                <th>{""}</th>
                  <td style={{ width: "26%" }}>
                    Sample Document
                  </td>
                  <td>10-03-2023, 10:05</td>
                  <td>Project A</td>
                  <td>Edit</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                <th>{""}</th>
                  <td style={{ width: "26%" }}>
                    Sample Document
                  </td>
                  <td>10-03-2023, 10:05</td>
                  <td>Project A</td>
                  <td>Edit</td>
                  <td>John Doe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
