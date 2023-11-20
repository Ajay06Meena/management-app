import React from "react";
import { Link, NavLink } from "react-router-dom"; // If you're using React Router

const Sidebar = () => {
  const path = window.location.pathname;
  const role = localStorage.getItem("role");
  console.log("role", role);
  return (
    <div>
      <div className="sidebar">
        <div className="Sidebar_heading">
          {path === "/adminboard" || path === "/users" ? (
            <>
              <NavLink className="fs-6 fw-bold" to="/adminboard">
                Dashboard{" "}
              </NavLink>
              <NavLink className="fs-6 fw-bold" to="/users">
                User Management{" "}
              </NavLink>
            </>
          ) : path === "/userdashboard" || path === "/projectlist" ? (
            <>
              <NavLink className="fs-6 fw-bold" to="/userdashboard">
                Dashboard{" "}
              </NavLink>
              <NavLink className="fs-6 fw-bold" to="/projectlist">
                Project
              </NavLink>
              {/* <NavLink className="fs-6 fw-bold" to="/projects">
                Client
              </NavLink> */}
            </>
          ) : path === "/" ||
            path === "/form" ||
            path === "/projectdetails" ||
            path === "/taskscreen" ||
            path === "/teamscreen" ||
            "/clientdata" ||
            "/documents" || "/setting" || "/teamscreen/adduser" || "/teamscreen/adduser/addprojects" || "/UserInvite" || "/createproject" || "/createproject/scope" || "/createproject/scope/milestone" || "/documents/proposal" || "/setting/permission" ? (
            <>
              <NavLink className="fs-6 fw-bold" to="/">
                Project{" "}
              </NavLink>
              <NavLink className="fs-6 fw-bold" to="/projectdetails">
                Project details{" "}
              </NavLink>
              <NavLink className="fs-6 fw-bold" to="/taskscreen">
                Task{" "}
              </NavLink>
              <NavLink className="fs-6 fw-bold" to="/teamscreen">
                Team{" "}
              </NavLink>
              <NavLink className="fs-6 fw-bold" to="/clientdata">
                Client{" "}
              </NavLink>
              <NavLink className="fs-6 fw-bold" to="/documents">
                Documents{" "}
              </NavLink>
              <NavLink className="fs-6 fw-bold" to="/setting">
                Setting{" "}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="fs-6 fw-bold" to="/dashboard">
                Dashboard{" "}
              </NavLink>
              <NavLink className="fs-6 fw-bold" to="/clients">
                Client
              </NavLink>
              {/* <NavLink className="fs-6 fw-bold" to="/projects">
                Project
              </NavLink> */}
            </>
          )}
          {/* <NavLink className="fs-6 fw-bold" to="/abc">
            Setting
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
