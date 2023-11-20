import React from "react";
import Sidebar from "../Sidebar";
import { useLocation } from "react-router-dom";
import "./index.css";
const AdminDashboard = () => {
  const { search } = useLocation();
  console.log(window.location.pathname);
  return (
    <>
      <Sidebar />
      <div className="layout">
        <div className="header">
          <h2>Dashboard</h2>
        </div>
      
      <div style={{marginTop:"100px", display:'flex', justifyContent:'space-between'}}>
        <div className="box1">
            <p>Total Users</p>
            <h5>100</h5>
            
        </div>
        <div className="box1">
            <p>Active Teams</p>
            <h5>50</h5>
        </div>
        <div className="box1">
            <p>Active Projects</p>
            <h5>10</h5>
        </div>
      </div>
      <div style={{marginTop:"100px", display:'flex', justifyContent:'space-between'}}>
        <div className="box2">
            <h3>Upcoming Taks</h3>
        </div>
        <div className="box2">
            <h3>Recent Activity</h3>
        </div>
      </div>
      </div>
    </>
  );
};

export default AdminDashboard;
