import React, {useState} from "react";
import Sidebar from "../../Sidebar";
import { Collapse, Divider, Checkbox } from 'antd';
import { Button, Modal, Input, Form } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
// import 'antd/dist/antd.css';

const customPanelStyle = {
    background: 'white',
    borderRadius: 4,
    marginBottom: 20,
    border: 0,
    overflow: 'hidden',
  };

const Permissions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
        <div>
            <h5> - Roles & Permissions</h5>
        </div>
        <div className="header-line">
        {/* <Button type="primary" className='common-btn' onClick={showModal}>
            create
      </Button> */}
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
              backgroundColor: "black",
              borderRadius: "20px",
            }}
            onClick={showModal}
          >
            + Add New Role
          </Button>
        </div>
        <div className="docs-activity">
          <div className="table-container">
            <table className="table-section">
              <thead>
                <tr>
                  <th></th>
                  <th>Role</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{""}</th>
                  <td style={{ width: "26%" }}>Admin</td>
                  <td>The Admin role is the highest level of access within the organization's system, entrusted with managing and overseeing all aspects of the platform</td>
                </tr>
                <tr>
                  <th>{""}</th>
                  <td style={{ width: "26%" }}> Manager</td>
                  <td>The Admin role is the highest level of access within the organization's system, entrusted with managing and overseeing all aspects of the platform</td>
                </tr>
                <tr>
                  <th>{""}</th>
                  <td style={{ width: "26%" }}>Project Manager</td>
                  <td>The Admin role is the highest level of access within the organization's system, entrusted with managing and overseeing all aspects of the platform</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
            <h5>Permissions</h5>
        <Collapse
      defaultActiveKey={['1']}
      expandIconPosition="right"
      style={{ backgroundColor: 'white' }}
    >
      <Collapse.Panel header="Admin" key="1" style={customPanelStyle}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Checkbox style={{fontWeight:'600'}}>Can add users</Checkbox>
          <Checkbox style={{fontWeight:'600', lineHeight:'2.571429'}}>Can add project</Checkbox>
          <Checkbox style={{fontWeight:'600', lineHeight:'2.571429'}}>Can add project</Checkbox>
          <Checkbox style={{fontWeight:'600', lineHeight:'2.571429'}}>Track Project milestones and deadlines</Checkbox>
          {/* <Checkbox>E</Checkbox> */}
        </div>
      </Collapse.Panel>
    </Collapse>
    {/* <Divider orientation="left" /> */}
    <Collapse
      items={[
        {
          key: '1',
          label: 'Manager',
          children: <p>{text}</p>,
        },
      ]}

    //   bordered={false}
      defaultActiveKey={['1']}
      expandIconPosition="right"
    //   ghost
      style={{ backgroundColor: 'white', marginBottom:'20px' }}
    />
    {/* <Divider orientation="left" /> */}
    <Collapse
      items={[
        {
          key: '1',
          label: 'Project Manager',
          children: <p>{text}</p>,
        },
      ]}
      defaultActiveKey={['1']}
      expandIconPosition="right"
    //   ghost
      style={{ backgroundColor: 'white' }}
    />
    {/* <Divider orientation="left" /> */}
        </div>
      </div>
      <Modal title="Add New Role" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Form 
          layout="vertical"
        //   form={form}
        //    onFinish={onFinish}
        >
          <Form.Item
           label="Role"
           name="role"
            // rules={[{ required: true, message: 'Please input the company name!' }]}
           >
            <Input style={{borderRadius:'20px'}}/>
          </Form.Item>
          
          <Form.Item
                name={["description"]}
                label="Description"
                // rules={[
                //   {
                //     required: true,
                //     message: "Project description is required",
                //   },
                // ]}
              >
                <Input.TextArea rows={4}/>
              </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{width:'100%', borderRadius:'20px', backgroundColor:'black'}}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Permissions;
