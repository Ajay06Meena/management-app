import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
// import { Button, Checkbox, Form, Input } from 'antd';
import { Form, Input, Select, Row, Col, Button } from "antd";
import "./common.css";
import { useNavigate } from "react-router-dom";
import Step from "./Step";

const steps = [
  {
    title: "Add Details",
    content: "First-content",
  },
  {
    title: "Add Project",
    content: "Second-content",
  },
  {
    title: "Send Invite",
    content: "Last-content",
  },
];
const { Option } = Select;
const AddUser = () => {
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    next();
    console.log("Received values of form: ", values);
    if (data.current > 0) {
      navigate("/teamscreen/adduser/addprojects", {
        state: data,
      });
    }
  };

  const handleReset = () => {
    form.resetFields();
  };

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const data = { current: 1, steps };

  return (
    <>
      <Sidebar />
      <div className="layout">
        <div style={{ padding: "22px" }}>
          <h4> - Add User</h4>
        </div>
        <div style={{ width: "45%", marginLeft: "inherit" }}>
          <Step
            current={current}
            setCurrent={setCurrent}
            steps={steps}
            next={next}
            prev={prev}
          />
        </div>
        <div>
          <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input style={{ borderRadius: "20px" }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input style={{ borderRadius: "20px" }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input style={{ borderRadius: "20px" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  label="Company"
                  name="company"
                  rules={[
                    { required: true, message: "Please select your company!" },
                  ]}
                >
                  <Select
                    placeholder="Select your company"
                    style={{ borderRadius: "20px" }}
                  >
                    <Option value="company1">Company 1</Option>
                    <Option value="company2">Company 2</Option>
                    {/* Add more options here */}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="User Type"
                  name="userType"
                  rules={[
                    {
                      required: true,
                      message: "Please select your user type!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select user type"
                    className="columnnnnn"
                    style={{ borderRadius: "28px" }}
                  >
                    <Option value="type1">Type 1</Option>
                    <Option value="type2">Type 2</Option>
                    {/* Add more options here */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            {/* <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={handleReset} style={{ margin: '0 8px' }}>
          Cancel
        </Button>
            </Form.Item> */}
            <Row gutter={[16, 16]}>
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
                    onClick={() => {
                      prev();
                    }}
                    style={{
                      width: "170px",
                      borderRadius: "40px",
                      color: "white",
                      backgroundColor: "gray",
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
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
