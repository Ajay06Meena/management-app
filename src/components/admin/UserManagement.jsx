import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setUserFormData } from "../../redux/action";

const UserManagement = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userFormReducer.users);
  console.log("users", userData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPopup, setShowPopup] = useState(false);

  const handleClose1 = () => setShowPopup(false);
  const handleShow1 = () => setShowPopup(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(setUserFormData(formData));
    handleShow1();
    // Handle form submission here (e.g., send data to the server)
    handleClose();
  };
  return (
    <>
      <Sidebar />
      <div className="layout">
        <div className="header">
          <h3>User Management</h3>
        </div>
        <Button
          className="add-subscription-text"
          variant="primary"
          onClick={handleShow}
          // style={{ marginBottom: "15px" }}
        >
          Add User
        </Button>
        <div style={{marginTop:'110px', marginTop:'7px'}}>
        {userData.map((data) => {
          return (
            <>
              <div className="user-list">{data.name}</div>
            </>
          );
        })}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              style={{ backgroundColor: "gray" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showPopup} onHide={handleClose1} style={{ top: "200px" }}>
          {/* <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header> */}
          <div closeButton></div>
          <Modal.Body closeButton style={{ padding: "56px", height: "200px" }}>
            <h5 style={{ textAlign: "center" }}>Client Added successful.</h5>
            <p style={{ textAlign: "center" }}>you can now view client list</p>
            <div style={{ textAlign: "center" }}>
              <Button variant="secondary" onClick={handleClose1}>
                Back to Clients Section
              </Button>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
             Back
          </Button>
        </Modal.Footer> */}
        </Modal>
    </>
  );
};

export default UserManagement;
