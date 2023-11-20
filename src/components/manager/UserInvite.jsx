import React, {useState} from "react";
import Sidebar from "../Sidebar";
import Step from "./Step";
import { Form, Input, Select, Row, Col, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
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

const UserInvite = () => {
  const [current, setCurrent] = useState(2);
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    //   if(data.current>0){
    //   navigate(
    //     "/teamscreen/adduser/addprojects",
    //     {
    //       state:data
    //     }
    //   )}
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
        <div>
          <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Row gutter={[16, 16]}>
              <Col span={20}>
                <Form.Item
                  label="Welcome Message"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  {/* <Input style={{borderRadius:'20px'}}/> */}
                  <TextArea rows={10} style={{ border: "3px solid gray" }} />
                </Form.Item>
              </Col>
            </Row>
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
              <Col span={8} style={{ display: "flex", justifyContent: "end" }}>
                {/* {current >= 0 && ( */}
                <Button
                  htmlType="button"
                  style={{
                    width: "170px",
                    borderRadius: "40px",
                    color: "white",
                    backgroundColor: "gray",
                  }}
                  onClick={() => {
                    navigate("/teamscreen/adduser/addprojects");
                  }}
                >
                  Back
                </Button>
              </Col>
              <Col
                span={4}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Form.Item>
                  {/* {current < steps.length - 1 && ( */}
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
                    Send Invite
                  </Button>
                  {/* )} */}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UserInvite;
