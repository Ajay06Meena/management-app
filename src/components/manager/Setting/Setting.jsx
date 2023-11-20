import React,{useState} from 'react'
import Sider from '../../Sider'
import Sidebar from '../../Sidebar'
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const Setting = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <Sidebar/>
    {/* <Sider/> */}
    <div className='layout'>
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
        <div className='setting-container'>
            <h5 role='button' onClick={() => {navigate("/setting/permission")}}>Roles & Permission</h5>
        </div>
        <div className='setting-container'>
            <h5>Templates</h5>
        </div>
        <div className='setting-container'>
            <h5>Settings</h5>
        </div>
    </div>
    </>
  )
}

export default Setting