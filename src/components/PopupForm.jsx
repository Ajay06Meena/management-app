import React, { useState } from 'react';
import {
  DialogComponent,
  DialogUtility,
} from '@syncfusion/ej2-react-popups';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { InputComponent } from "@syncfusion/ej2-react-base";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

const PopupForm = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    companySize: '',
    department: '',
    position: '',
    privacyConsent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleCompanySizeChange = (e) => {
    setFormData({ ...formData, companySize: e.value });
  };

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData);

    // Close the popup
    handlePopupClose();
  };

  return (
    <div>
      <ButtonComponent onClick={handlePopupOpen} className="e-primary">
        Open Popup
      </ButtonComponent>
      <DialogComponent
        width={'400px'}
        header={'Popup Form'}
        visible={false}
        showCloseIcon={true}
        animationSettings={{ effect: 'Zoom' }}
        onClose={handlePopupClose}
      >
        <div style={{ padding: '20px' }}>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <TextBoxComponent
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <TextBoxComponent
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <TextBoxComponent
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <TextBoxComponent
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="companySize">Company Size:</label>
              <DropDownListComponent
                id="companySize"
                name="companySize"
                dataSource={['Small', 'Medium', 'Large']}
                value={formData.companySize}
                change={handleCompanySizeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <TextBoxComponent
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <TextBoxComponent
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleInputChange}
                />{' '}
                I agree to the privacy policy
              </label>
            </div>
          </form>
          <ButtonComponent onClick={handleSubmit} cssClass="e-primary">
            Submit
          </ButtonComponent>
        </div>
      </DialogComponent>
    </div>
  );
};

export default PopupForm;
