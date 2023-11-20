import React from "react";
import Sidebar from "../../Sidebar";
import { Table } from "antd";
import "../common.css";
import { Card, Button, Input, Select, Row, Col, Form } from "antd";

const Proposal = () => {
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
          <div className="header-line">
            <h5>Recent Activity</h5>
            {/* <button className="proposal-btn">+Create Proposal</button> */}
            <Button
          type="primary"
          // onClick={handleAddCard}
          style={{
            // position: "sticky",
            // bottom: "20px",
            maxWidth: "400px",
            // left: "50%",
            // transform: "translateX(-50%)",
            backgroundColor:'black',
            borderRadius:'20px'
          }}
        >
          +Create Proposal
        </Button>
          </div>
        <div className="docs-activity">
          <div className="table-container">
            <table className="table-section">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Client</th>
                  <th>Sent</th>
                  <th>Accepted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{""}</th>
                  <td style={{ width: "26%" }}>Accounting</td>
                  <td>John Smit</td>
                  <td>Today</td>
                  <td>--</td>
                </tr>
                <tr>
                  <th>{""}</th>
                  <td style={{ width: "26%" }}>Accounting</td>
                  <td>John Smit</td>
                  <td>Today</td>
                  <td>--</td>
                </tr>
                <tr>
                  <th>{""}</th>
                  <td style={{ width: "26%" }}>Accounting</td>
                  <td>John Smit</td>
                  <td>Today</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposal;
