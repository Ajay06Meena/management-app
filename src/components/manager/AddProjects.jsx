import React, {useState} from "react";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import Sidebar from "../Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import Step from "./Step";
const steps = [
    {
      title: 'Add Details',
      content: 'First-content',
    },
    {
      title: 'Add Project',
      content: 'Second-content',
    },
    {
      title: 'Send Invite',
      content: 'Last-content',
    },
  ];
const AddProjects = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(1);
  const onFinish = (values) => {
    navigate("/UserInvite", {
      state: { current: 2, steps },
    });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Sidebar />
      <div className="layout">
        <div style={{ padding: "22px" }}>
          <h4> - Add User</h4>
        </div>
        <div style={{ width: "45%", marginLeft: "inherit" }}>
          <Step current={current} steps={steps} />
        </div>
        <div style={{ marginLeft: "-30px" }}>
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            //   layout="vertical"
          >
            <Row>
              <Col span={8} style={{ textAlign: "end" }}>
                <Form.Item
                  //   label="All Projects"
                  name="allProjects"
                  valuePropName="checked"
                  rules={[
                    {
                      required: true,
                      message: "Please check this field!",
                    },
                  ]}
                >
                  <Checkbox>All Projects</Checkbox>
                </Form.Item>
              </Col>
              <Col span={16}>
                <Form.Item
                  label="Search Project"
                  name="searchProject"
                  rules={[
                    {
                      required: true,
                      message: "Please input your search project!",
                    },
                  ]}
                >
                  <Input style={{ borderRadius: "20px" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row style={{ justifyContent: "space-between" }}>
              <Col span={12}>
                <Form.Item
                  label="Permissions"
                  name="permissions"
                  rules={[
                    {
                      required: true,
                      message: "Please input your permissions!",
                    },
                  ]}
                >
                  <Input style={{ borderRadius: "20px" }} />
                </Form.Item>
              </Col>
              <Col span={6} style={{ textAlign: "center" }}>
                <Form.Item
                  name="canAddUsers"
                  valuePropName="checked"
                  rules={[
                    {
                      required: true,
                      message: "Please check this field!",
                    },
                  ]}
                >
                  <Checkbox>Can Add Users</Checkbox>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="canCreateProject"
                  valuePropName="checked"
                  rules={[
                    {
                      required: true,
                      message: "Please check this field!",
                    },
                  ]}
                >
                  <Checkbox>Can Create Project</Checkbox>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ width: "80%", marginLeft: "70px" }}>
              <Col span={8}>
                <Form.Item>
                  <Button
                    htmlType="button"
                    onClick={handleReset}
                    style={{
                      width: "170px",
                      borderRadius: "40px",
                      color: "white",
                      backgroundColor: "gray",
                    }}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
              <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
                {current >= 0 && (
                  <Button
                    htmlType="button"
                    style={{
                      width: "170px",
                      borderRadius: "40px",
                      color: "white",
                      backgroundColor: "gray",
                    }}
                    onClick={() => {
                      navigate("/teamscreen/adduser/");
                    }}
                  >
                    Back
                  </Button>
                )}
              </Col>
              <Col
                span={4}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Form.Item>
                  {current < steps.length - 1 && (
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: "170px",
                        borderRadius: "40px",
                        color: "white",
                        backgroundColor: "gray",
                      }}
                    >
                      Next
                    </Button>
                  )}
                </Form.Item>
              </Col>
            </Row>
            {/* <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddProjects;
