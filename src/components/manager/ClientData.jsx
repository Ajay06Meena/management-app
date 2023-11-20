import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import { Table } from "react-bootstrap";
import "./team.css";
import { Button, Modal, Input, Form } from 'antd';

const ClientData = () => {
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

  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Data, setData] = useState([])
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Received values:', values, Data);
    setData([...Data, values])
    // You can save the data to the database or perform any other necessary operations here
    setIsModalOpen(false);
  };

  console.log(Data);
  return (
    <>
    <Sidebar/>
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
            {/* <button className="common-btn">create</button> */}
            <Button type="primary" className='common-btn' onClick={showModal}>
            create
      </Button>
          </div>
        </div>
        <Table className="users-list">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Client Name</th>
              <th>Company Name</th>
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
    <Modal title="Add Client" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Form 
          layout="vertical"
          form={form}
           onFinish={onFinish}
        >
          <Form.Item
           label="Company Name"
           name="companyName"
            rules={[{ required: true, message: 'Please input the company name!' }]}
           >
            <Input style={{borderRadius:'20px'}}/>
          </Form.Item>
          <Form.Item 
          label="Contact Name"
          name="contactName"
            rules={[{ required: true, message: 'Please input the contact name!' }]}
          >
            <Input style={{borderRadius:'20px'}}/>
          </Form.Item>
          <Form.Item
           label="Email"
           name="email"
           rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
           >
            <Input style={{borderRadius:'20px'}}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{width:'100%', borderRadius:'20px', backgroundColor:'black'}}>
              Add Client
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ClientData