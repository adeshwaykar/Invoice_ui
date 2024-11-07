import React, { useState } from 'react';
import './register.css'; // Import CSS file

const RemainingRegistrationModal = ({ isPendimg }) => {
  const [show, setShow] = useState(isPendimg);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    companyName: '',
    street: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    GSTIN: '',
    taxNumber: ''
  });

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      {show && (
        <>
        <div className="modal-overlay" ></div>
        <div className="modal modal-color show d-block modal-lg" tabIndex="-1" role="dialog" >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{backgroundColor:"white"}}>
              <div className="modal-header align-items-center">
                <h5 className="modal-title ">Complete Your Registration</h5>
                      </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-6 py-1">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="street">Street</label>
                        <input
                          type="text"
                          className="form-control"
                          id="street"
                          name="street"
                          value={formData.street}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="GSTIN">GSTIN</label>
                        <input
                          type="text"
                          className="form-control"
                          id="GSTIN"
                          name="GSTIN"
                          value={formData.GSTIN}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6 py-1">
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
  <input
    type="text"
    className="form-control"
    id="firstName"
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
    placeholder=" "
    required
  />
  <label htmlFor="firstName">First Name</label>
</div>

                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleClose}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
   
  );
};

export default RemainingRegistrationModal;
