import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import { DialogComponent } from '@syncfusion/ej2-react-popups';
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { setFormDataAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const ClientList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.formReducer.formData);
  console.log("data", data);
  const [clients, setClients] = useState([
    { id: 1, name: "Client 1", email: "client1@example.com" },
    { id: 2, name: "Client 2", email: "client2@example.com" },
    // Add more clients here
  ]);

  // const [newClient, setNewClient] = useState({
  //   name: "",
  //   email: "",
  //   company: "",
  //   tags: "",
  // });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    companyName: "",
    companySize: "",
    department: "",
    position: "",
    privacyConsent: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewClient({ ...newClient, [name]: value });
  // };

  // const addClient = () => {
  //   setClients([...clients, { id: clients.length + 1, ...newClient }]);
  //   setNewClient({ name: "", email: "" });
  // };

  const [showPopup, setShowPopup] = useState(false);

  const handleClose1 = () => setShowPopup(false);
  const handleShow1 = () => setShowPopup(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleSubmit = () => {
  //   dispatch(setFormDataAction(newClient));

  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data here
    const newErrors = {};
    if (!formData.firstname) {
      newErrors.firstname = "First name is required";
    }
    if (!formData.lastname) {
      newErrors.lastname = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.companyName) {
      newErrors.companyName = "Company name is required";
    }
    // if (!formData.companySize) {
    //   newErrors.companySize = 'Company size is required';
    // }
    // if (!formData.department) {
    //   newErrors.department = 'Department is required';
    // }
    // if (!formData.position) {
    //   newErrors.position = 'Position is required';
    // }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "You must agree to the privacy policy";
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions here
      console.log("Form data:", formData);
      dispatch(setFormDataAction(formData));
      handleShow1();
      handleClose();
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        companyName: "",
        companySize: "",
        department: "",
        position: "",
        privacyConsent: false,
      });
      setErrors(newErrors);
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <>
      <Sidebar />
      <div className="layout">
        <div className="header">
          <h2>Client List</h2>
        </div>
        {/* <div style={{textAlign:'right', marginTop:'5px'}}><button className="btn btn-secondary" >Add Client</button></div> */}
        <Button
          className="add-subscription-text"
          variant="primary"
          onClick={handleShow}
          // style={{ marginBottom: "15px" }}
        >
          Add Clients
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ backgroundColor: "dimgray" }}>
            <Modal.Title>Client Onboarding</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="firstname">
                <Form.Label>
                  First Name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  isInvalid={!!errors.firstname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="lastname">
                <Form.Label>
                  Last Name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  isInvalid={!!errors.lastname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>
                  Email <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="companyName">
                <Form.Label>
                  Company Name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  isInvalid={!!errors.companyName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.companyName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="companySize">
                <Form.Label>Company Size</Form.Label>
                <Form.Control
                  as="select"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                >
                  <option value=""></option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-10001">501-10001</option>
                  <option value="10001+">10001+</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="department">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  isInvalid={!!errors.department}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.department}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="position">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  isInvalid={!!errors.position}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.position}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Similar Form Groups for other fields */}

              <Form.Group controlId="privacyConsent">
                <Form.Check
                  type="checkbox"
                  name="privacyConsent"
                  label="I agree to the privacy policy"
                  checked={formData.privacyConsent}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      privacyConsent: e.target.checked,
                    })
                  }
                  isInvalid={!!errors.privacyConsent}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.privacyConsent}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="secondary"
                style={{ backgroundColor: "black" }}
                type="submit"
              >
                Add
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        {/* <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newClient.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={newClient.email}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={addClient}
        >
          Add Client
        </button>
      </form> */}

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
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>company Name</th>
              {/* <th>company size</th> */}
              <th>department</th>
              <th>position</th>
            </tr>
          </thead>
          <tbody style={{ borderStyle: "hidden" }}>
            {data &&
              data?.map((client, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {client.firstname} {client.lastname}
                  </td>
                  <td>{client.email}</td>
                  <td>{client.companyName}</td>
                  {/* <td>{client.companySize}</td> */}
                  <td>{client.department}</td>
                  <td>{client.position}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClientList;
