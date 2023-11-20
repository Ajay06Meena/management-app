import React,{useState} from "react";
import Sidebar from "../../Sidebar";
import { Form, Input, Select, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import Step from "../Step";

const steps = [
  {
    title: "Project Details",
    content: "First-content",
  },
  {
    title: "Scope",
    content: "Second-content",
  },
  {
    title: "Milestone",
    content: "Third-content",
  },
  {
    title: "Add People",
    content: "Last-content",
  },
];
const { Option } = Select;

const CreateProject = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
    navigate("/createproject/scope")
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Sidebar />
      <div className="layout">
        <div style={{ padding: "22px" }}>
          <h4> - Add Project</h4>
        </div>
        <div style={{ width: "70%", marginLeft: "150px" }}>
          <Step
            current={current}
            setCurrent={setCurrent}
            steps={steps}
          />
        </div>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          form={form}
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form.Item
                name={["project", "name"]}
                label="Project Name"
                rules={[
                  { required: true, message: "Project name is required" },
                ]}
              >
                <Input style={{borderRadius:'20px'}}/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Form.Item
                name={["client", "name"]}
                label="Client Name"
                rules={[{ required: true, message: "Client name is required" }]}
              >
                <Select placeholder="Select client">
                  <Option value="client1">Client 1</Option>
                  <Option value="client2">Client 2</Option>
                  <Option value="client3">Client 3</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Form.Item
                name={["industry"]}
                label="Choose Industry"
                rules={[
                  { required: true, message: "Please choose an industry" },
                ]}
              >
                <Select placeholder="Select industry">
                  <Option value="industry1">Industry 1</Option>
                  <Option value="industry2">Industry 2</Option>
                  <Option value="industry3">Industry 3</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form.Item
                name={["project", "description"]}
                label="Project Description"
                rules={[
                  {
                    required: true,
                    message: "Project description is required",
                  },
                ]}
              >
                <Input.TextArea rows={8}/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form.List name="links">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Form.Item
                        {...restField}
                        name={[name, "link"]}
                        fieldKey={[fieldKey, "link"]}
                        key={key}
                      >
                        <Input placeholder="Add Link" />
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block>
                        Add Link
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
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
              <Col xs={24} sm={8} style={{ display: "flex", justifyContent: "end" }}>
                {/* {current >= 0 && ( */}
                  <Button
                    htmlType="button"
                    // onClick={() => {
                    //   prev();
                    // }}
                    style={{
                      width: "170px",
                      borderRadius: "40px",
                      color: "white",
                      backgroundColor: "gray",
                    }}
                  >
                    Previous
                  </Button>
                {/* )} */}
              </Col>
              <Col
                xs={24} sm={8}
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
                      Next
                    </Button>
                  {/* )} */}
                </Form.Item>
              </Col>
            </Row>
          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </div>
    </>
  );
};

export default CreateProject;
