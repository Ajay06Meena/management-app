import logo from './logo.svg';
import './App.css';
import CustomerOnboardingForm from './components/CustomerOnboardingForm';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, Legend, DataLabel } from '@syncfusion/ej2-react-charts';
import Sidebar from './components/Sidebar';
import ClientList from './components/ClientList';
import {
  Routes,
  Route,
  Navigate,
  Redirect  
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from './components/Projects';
import Dashboard from './components/Dashboard';
import PopupForm from './components/PopupForm';
import ProjectDetails from './components/manager/ProjectDetails';
import ProjectForm from './components/ProjectForm';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import Login from './components/Login';
import { useState } from 'react';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import UserDashboard from './components/users/UserDashboard';
import ProjectList from './components/users/ProjectList';
import ProjectScreen from './components/manager/Projects/ProjectScreen';
import TaskScreen from './components/manager/TaskScreen';
import TeamList from './components/manager/TeamList';
import ClientData from './components/manager/ClientData';
import Documents from './components/manager/Documents/Documents';
import Setting from './components/manager/Setting/Setting';
import AddUser from './components/manager/AddUser';
import AddProjects from './components/manager/AddProjects';
import UserInvite from './components/manager/UserInvite';
import CreateProject from './components/manager/Projects/CreateProject';
import Scope from './components/manager/Projects/Scope';
import Milestone from './components/manager/Projects/Milestone';
import Proposal from './components/manager/Documents/Proposal';
import Permissions from './components/manager/Setting/Permissions';
import Sider from './components/Sider'

function App() {
  const [loggedInRole, setLoggedInRole] = useState(null);

  const handleLogin = (role) => {
    setLoggedInRole(role);
  };
  const role = localStorage.getItem("role")
  console.log("role",role);
  return (
    <div className="App">
      {/* <CustomerOnboardingForm /> */}
        {/* <Sider/> */}
      <div className="wrapper">
        {/* <Sidebar /> */}
      <Routes>
      <Route path="/clients" element={<ClientList />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/form" element={<ProjectForm />} />
      <Route path="/projectdetails" element={<ProjectDetails />} />
      <Route path="/board" element={<Task />} />
      <Route path="/form" element={<TaskForm/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/adminboard" element={<AdminDashboard />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/projectlist" element={<ProjectList />} />
      <Route path="/" element={<ProjectScreen />} />
      <Route path="/taskscreen" element={<TaskScreen />} />
      <Route path="/teamscreen" element={<TeamList />} />
      <Route path="/clientdata" element={<ClientData />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/documents/proposal" element={<Proposal />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/setting/permission" element={<Permissions />} />
      <Route path="/teamscreen/adduser" element={<AddUser />} />
      <Route path="/teamscreen/adduser/addprojects" element={<AddProjects />} />
      <Route path="/UserInvite" element={<UserInvite />} />
      <Route path="/createproject" element={<CreateProject />} />
      <Route path="/createproject/scope" element={<Scope />} />
      <Route path="/createproject/scope/milestone" element={<Milestone />} />
      {/* <Route path="/project" element={< Project/>} /> */}
      {/* <Route path="/" element={<Login />} /> */}
      {/* {loggedInRole ? (
      ) : (

      <Route path="/" element={<Login onLogin={handleLogin}/>} />
      )} */}
      {/* <Route
          path="/"
          render={() => (
            <Login setRole={setRole} />
          )}
        />
        <Route
          path="/dashboard"
          render={() =>
            role === 'admin' || role === 'user' ? (
              <Dashboard />
            ) : (
              <Navigate  to="/" />
            )
          }
        /> */}
        {/* <ClientList /> */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
