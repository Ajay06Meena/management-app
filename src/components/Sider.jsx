import React, { useState } from "react";
// import './index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";
import Setting from "./manager/Setting/Setting";
import ProjectScreen from "./manager/Projects/ProjectScreen";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ float: "", minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#f0f2f5", minHeight: "100vh" }}
      >
        <div className="demo-logo-vertical" />
        {/* <Menu
        //   onClick={({key}) => {
        //     if(key){
        //         navigate(key)
        //     }
        //   }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/projectscreen',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
        
            },
          ]}
        /> */}
        <Menu
          theme="#f0f2f5"
          mode="inline"
          defaultSelectedKeys={["/projectscreen"]}
        >
          <Menu.Item key="/projectscreen" icon={<UserOutlined />}>
            <Link to="/projectscreen">Nav 1</Link>
          </Menu.Item>
          <Menu.Item key="/setting" icon={<VideoCameraOutlined />}>
            <Link to="/setting">Nav 2</Link>
          </Menu.Item>
          <Menu.Item key="/nav3" icon={<UploadOutlined />}>
            <Link to="/nav3">Nav 3</Link>
          </Menu.Item>
        </Menu>

        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            zIndex: "1",
            // marginLeft:"160px",
            fontSize: "16px",
            width: 64,
            height: 64,
            color: "white",
            position: "absolute",
            bottom: "175px",
            left: collapsed ? "45px" : "165px",
            // fontSize: '16px',
            // width: 64,
            // height: 64,
            // color: 'white',
            background: "#001529",
            borderColor: "#001529",
          }}
        />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            {/* <Route path="/projectscreen" element={< Setting/>} /> */}
            <Route path="/setting" element={<Setting />} />
            <Route path="/projectscreen" element={<ProjectScreen />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
{
  /* <Layout>
  <Header
    style={{
      padding: 0,
      background: colorBgContainer,
    }}
  >
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
  </Header>
  <Content
    style={{
      margin: '24px 16px',
      padding: 24,
      minHeight: 280,
      background: colorBgContainer,
    }}
  >
    Content
  </Content>
</Layout> */
}
