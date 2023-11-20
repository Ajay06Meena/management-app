import React from "react";
import Sidebar from "../Sidebar";
import { Table } from "react-bootstrap";
import "./team.css";
import { useNavigate } from "react-router-dom";

const TeamList = () => {
  const data = [
    { id: 1, name: "John Doe", role: "Developer", activeProjects: "Project A" },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      activeProjects: "Project B",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Manager",
      activeProjects: "Project C",
    },
    { id: 1, name: "John Doe", role: "Developer", activeProjects: "Project A" },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      activeProjects: "Project B",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Manager",
      activeProjects: "Project C",
    },
    { id: 1, name: "John Doe", role: "Developer", activeProjects: "Project A" },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      activeProjects: "Project B",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Manager",
      activeProjects: "Project C",
    },
    { id: 1, name: "John Doe", role: "Developer", activeProjects: "Project A" },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      activeProjects: "Project B",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Manager",
      activeProjects: "Project C",
    },
    { id: 1, name: "John Doe", role: "Developer", activeProjects: "Project A" },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      activeProjects: "Project B",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Manager",
      activeProjects: "Project C",
    },
  ];

  const navigate = useNavigate();


  const handler = () => {
    navigate("/teamscreen/adduser")
  }
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
            <button className="common-btn" onClick={handler}>create</button>
          </div>
        </div>
        <Table className="users-list">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Role</th>
              <th>Active Project (s)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.activeProjects}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TeamList;
