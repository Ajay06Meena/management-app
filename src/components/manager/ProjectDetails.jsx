import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Button, Modal, Input, Form, Select, DatePicker } from "antd";

const ProjectDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Data, setData] = useState([]);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handler = () => {};
  const onFinish = (values) => {
    console.log("Received values:", values);
    setData([...Data, values]);
    // You can save the data to the database or perform any other necessary operations here
    setIsModalOpen(false);
  };
  console.log(Data);
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
        <div className="p-content">
          <div className="p-box">
            <div className="task-box">
              <div className="heading">
                <h5>Pending Tasks</h5>
                <button className="task-btn" onClick={showModal}>
                  +Add Task
                </button>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Task Name</th>
                      <th>Due Date</th>
                      <th>Project</th>
                      <th>Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{""}</th>
                      <td>task 1</td>
                      <td>16, Nov</td>
                      <td>project A</td>
                      <td>
                        <div
                          style={{
                            backgroundColor: "red",
                            borderRadius: "7px",
                            width: "75px",
                            textAlign: "center",
                          }}
                        >
                          High
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>{""}</th>
                      <td>task 2</td>
                      <td>21, Oct</td>
                      <td>project B</td>
                      <td
                      // style={{
                      //   backgroundColor: "yellow",
                      //   borderRadius: "20px",
                      //   width: "75px",
                      // }}
                      >
                        <div
                          style={{
                            backgroundColor: "Yellow",
                            borderRadius: "7px",
                            width: "75px",
                            textAlign: "center",
                          }}
                        >
                          Average
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>{""}</th>
                      <td>task 3</td>
                      <td>24, Oct</td>
                      <td>project C</td>
                      <td>
                        <div
                          style={{
                            backgroundColor: "green",
                            borderRadius: "7px",
                            width: "75px",
                            textAlign: "center",
                          }}
                        >
                          Low
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="p-box">
            <div className="task-box">
              <div className="heading">
                <h5>Recent Activity</h5>
                <button className="task-btn">+Add Project</button>
                <button className="task-btn">View All</button>
              </div>
              <ul className="activity">
                <li>
                  You just completed crafting the detailed scope document,
                  outlining the project goals and strategies.
                </li>
                <li>
                  You just completed crafting the detailed scope document,
                  outlining the project goals and strategies.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-box">
            <div className="task-box">
              <div className="heading">
                <h5>Recent Documents</h5>
                <button className="task-btn">View All</button>
              </div>
              <div className="documents">
                <h6>Proposal</h6>
                <h6>SOW</h6>
                <h6>Contract</h6>
              </div>
            </div>
          </div>
          <div className="p-box">
            <div className="task-box">
              <div className="heading">
                <h5>Upcoming Meetings</h5>
                <button className="task-btn">Book a meeting</button>
              </div>
              <div className="meeting-status">
                <h6>Weekly meeting</h6>
                <button
                  style={{
                    backgroundColor: "green",
                    borderRadius: "20px",
                  }}
                >
                  Accepted
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Add Task"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item label="Task name" name="taskName">
            <Input style={{ borderRadius: "20px" }} />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              label="Due Date"
              name="dueDate"
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <DatePicker style={{ borderRadius: "20px", width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Priority"
              name="priority"
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                marginLeft: "16px",
              }}
            >
              <Select style={{ borderRadius: "20px" }}>
                <Select.Option value="low">Low</Select.Option>
                <Select.Option value="average">Average</Select.Option>
                <Select.Option value="high">High</Select.Option>
              </Select>
            </Form.Item>
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              label="Est. Time"
              name="estTime"
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input style={{ borderRadius: "20px" }} />
            </Form.Item>
            <Form.Item
              label="Dependency"
              name="dependency"
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                marginLeft: "16px",
              }}
            >
              <Input style={{ borderRadius: "20px" }} />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Assigned To" name="assignedTo">
            <Input style={{ borderRadius: "20px" }} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                borderRadius: "20px",
                backgroundColor: "black",
              }}
            >
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProjectDetails;
