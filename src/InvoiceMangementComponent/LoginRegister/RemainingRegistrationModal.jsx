import React, { useContext, useState } from 'react';
import './register.css'; // Import CSS file
import { LoginRegisterContext } from '../../InvoiceManagementContext/LoginRegisterContext';

const RemainingRegistrationModal = ({ isPendimg }) => {
  const { SaveCustomer} = useContext(LoginRegisterContext)
  const [error, setError] = useState();

  const [show, setShow] = useState(isPendimg);
  const [formData, setFormData] = useState({
    customer_id: localStorage.getItem('customerId') || '',  // Handle potential null value
    firstName: '',
    lastName: '',
    phoneNo: '',
    companyName: '',
    address: {
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    },
    gstinNo: '',
    taxNumber: ''
  });

  const handleSubmit = async(e) => {
    
    e.preventDefault();
const status=  await SaveCustomer(formData);
if(status){
  localStorage.setItem("userLevel",'2');
    
  setShow(false);
}else{
  setError("something get Wrong")
}
    
  

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to update address fields
const handleAddressChange = (e) => {
  const { name, value } = e.target;

  setFormData(prevData => ({
    ...prevData,
    address: {
      ...prevData.address,
      [name]: value
    }
  }));
};

  return (
    <div>
      {show && (
        <>
          <div className="modal-overlay" ></div>
          <div className="modal modal-color show d-block modal-lg" tabIndex="-1" role="dialog" >
            <div className="modal-dialog" role="document">
              <div className="modal-content" style={{ backgroundColor: "white" }}>
              <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="modal-header align-items-center">
                  <h5 className="modal-title ">Complete Your Registration</h5>
                </div>
                <div className="modal-body">
                  
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
                        <div className="form-group py-1">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phoneNo"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group py-1">
                          <label htmlFor="street">Street</label>
                          <input
                            type="text"
                            className="form-control"
                            id="street"
                            name="address"
                            value={formData.address.address}
                            onChange={handleAddressChange}
                          />
                        </div>
                        <div className="form-group py-1">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={formData.address.city}
                            onChange={handleAddressChange}
                          />
                        </div>
                        <div className="form-group py-1">
                          <label htmlFor="GSTIN">GSTIN</label>
                          <input
                            type="text"
                            className="form-control"
                            id="gstinNo"
                            name="gstinNo"
                            value={formData.gstinNo}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group py-1">
                        <label htmlFor="firstName">PIN Code</label>

                          <input
                            type="text"
                            className="form-control"
                            id="pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            placeholder=" "
                            required
                          />
                        </div>
                      </div>
                      <div className="col-6 py-1">
                        <div className="form-group ">
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
                        <div className="form-group py-1">
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
                        <div className="form-group py-1">
                          <label htmlFor="state">State</label>
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            name="state"
                            value={formData.address.state}
                            onChange={handleAddressChange}
                          />
                        </div>
                        <div className="form-group py-1">
                          <label htmlFor="country">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            value={formData.address.country}
                            onChange={handleAddressChange}
                          />
                        </div>
                        <div className="form-group py-1">
                        <label htmlFor="firstName">Tax Number</label>

                          <input
                            type="text"
                            className="form-control"
                            id="taxNumber"
                            name="taxNumber"
                            value={formData.taxNumber}
                            onChange={handleChange}
                            placeholder=" "
                            required
                          />
                        </div>
                      

                      </div>
                    </div>
                  
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary px-5" >
                    Save 
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>

  );
};

export default RemainingRegistrationModal;
