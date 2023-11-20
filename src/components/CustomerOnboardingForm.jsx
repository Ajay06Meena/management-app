import React, { useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useDispatch, useSelector } from 'react-redux';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
// import './CustomerOnboardingForm.css'; // Create this CSS file for custom styling
import { setFormDataAction } from '../redux/action';
function CustomerOnboardingForm() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.formData)
    console.log("data",data);
    const [customerInfo, setCustomerInfo] = useState({
      name: '',
      email: '',
      company: '',
      phone: '',
    });
  
    const [formError, setFormError] = useState({
      name: '',
      email: '',
      company: '',
      phone: '',
      });


    // Create form validation rules
  const validationRules  = {
    name: { required: true },
    email: { required: true, email: true },
    company: { required: true },
    phone: { required: true },
  };

//   // Create form validation instance
//   const formValidatorOptions: FormValidatorModel = {
//     rules: formValidatorRules,
//   };

//   // Initialize the form validation
//   const formValidator = new FormValidator('#myForm', formValidatorOptions);

let formValidator;
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCustomerInfo({
        ...customerInfo,
        [name]: value,
      });
      formValidator.validate(e.target.name);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formValidator.validate()) {
        // Form is valid, you can submit the data here
        console.log('Form submitted:', customerInfo);
      }
      dispatch(setFormDataAction(customerInfo));
      console.log(customerInfo);
      setCustomerInfo({name: '',
      email: '',
      company: '',
      phone: '',})
    };
  
    return (
      <div className="customer-form">
        <h2>Customer Onboarding Form</h2>
        <form onSubmit={handleSubmit} style={{padding:'inherit'}}>
          <div className="form-group">
            <label>Name:</label>
            <TextBoxComponent
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
            />
            {/* <p className="error-message">{formError.name}</p> */}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <TextBoxComponent
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
            />
            {/* <p className="error-message">{formError.email}</p> */}
          </div>
          <div className="form-group">
            <label>Company Name:</label>
            <TextBoxComponent
              name="company"
              value={customerInfo.company}
              onChange={handleInputChange}
            />
            {/* <p className="error-message">{formError.company}</p> */}
          </div>
          <div className="form-group">
            <label>Phone No:</label>
            <TextBoxComponent
              name="phone"
              value={customerInfo.phone}
              onChange={handleInputChange}
            />
            {/* <p className="error-message">{formError.phone}</p> */}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default CustomerOnboardingForm;
  