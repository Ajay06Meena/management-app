import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import { Card, Button, Input, Select, Row, Col, Switch, Form } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Step from "../Step";
const { Option } = Select;

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
const Milestone = () => {
  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(2);

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
          <Step current={current} setCurrent={setCurrent} steps={steps} />
        </div>
        <div
          style={{
            overflowY: cards.length > 1 ? "scroll" : "hidden",
            marginBottom: "50px",
            height: "370px",
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              style={{
                width: "100%",
                marginBottom: "16px",
                border: "2px solid black",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>Milestone {index + 1}</h6>
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => handleDeleteCard(index)}
                />
              </div>
              <div>
                <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
                  <Col span={12}>
                    <div>
                      <div style={{ marginBottom: "8px" }}>
                        Choose Scope Section
                      </div>
                      <Select
                        style={{ width: "100%" }}
                        placeholder="Choose Scope Section"
                      >
                        <Option value="section1">Section 1</Option>
                        <Option value="section2">Section 2</Option>
                        <Option value="section3">Section 3</Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <div style={{ marginBottom: "8px" }}>Due Date</div>
                      <Input type="date" />
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "16px" }}>
                  <Col span={12}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ marginRight: "8px" }}>Billable</div>
                    </div>
                  </Col>
                  <Col
                    span={12}
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <Switch />
                  </Col>
                </Row>
              </div>
            </Card>
          ))}
        </div>
        <Button
          type="primary"
          onClick={handleAddCard}
          style={{
            position: "sticky",
            // bottom: "20px",
            maxWidth: "400px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "black",
            borderRadius: "20px",
          }}
        >
          +Add More Milestone
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
                  //   onClick={() => {navigate("/projectscreen/createproject/scope/milestone")}}
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

export default Milestone;
