import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import { Card, Button, Input, Select, Row, Col, Form } from "antd";
// import { Form, Input, Select, Button, Row, Col } from "antd";
import { CloseOutlined } from "@ant-design/icons";
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
const Scope = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(1)
  const handleAddCard = () => {
    setCards([...cards, {}]);
  };

  const handleDeleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
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
        <div>
          <h6>Define Scope</h6>
          <div
            style={{
              height: "370px",
              overflowY: cards.length > 1 ? "scroll" : "hidden",
              marginBottom: "50px",
            }}
          >
            {/* <Button type="primary" onClick={handleAddCard} style={{ marginBottom: '16px' }}>Add Card</Button> */}
            {cards.map((card, index) => (
              <Card
                key={index}
                style={{
                  width: "100%",
                  marginBottom: "16px",
                  border: "2px solid black",
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={() => handleDeleteCard(index)}
                  />
                </div>
                <div style={{ padding: "0px" }}>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <div>
                        <div style={{ marginBottom: "8px" }}>Section Title</div>
                        <Input placeholder="Section Title" />
                      </div>
                    </Col>
                    <Col span={12}>
                      <div>
                        <div style={{ marginBottom: "8px" }}>Assigned To</div>
                        <Select
                          style={{ width: "100%" }}
                          placeholder="Select assigned person"
                        >
                          <Option value="person1">Person 1</Option>
                          <Option value="person2">Person 2</Option>
                          <Option value="person3">Person 3</Option>
                        </Select>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <div>
                        <div style={{ marginBottom: "8px" }}>Description</div>
                        <Input.TextArea rows={4} placeholder="Description" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <Button
          type="primary"
          onClick={handleAddCard}
          style={{
            position: "sticky",
            bottom: "20px",
            maxWidth: "400px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor:'black',
            borderRadius:'20px'
          }}
        >
          +Add More Section
        </Button>
        <div style={{ marginTop: "90px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Form.Item>
                <Button
                  htmlType="button"
                  // onClick={handleReset}
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
            <Col
              xs={24}
              sm={8}
              style={{ display: "flex", justifyContent: "end" }}
            >
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
              xs={24}
              sm={8}
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
                  onClick={() => {navigate("/createproject/scope/milestone")}}
                >
                  Next
                </Button>
                {/* )} */}
              </Form.Item>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Scope;
