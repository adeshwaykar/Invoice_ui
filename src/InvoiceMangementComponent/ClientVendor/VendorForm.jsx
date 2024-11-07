import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody } from "reactstrap";

const VendorForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    phone: "",
    email: "",
    gstTreatement: "",
    gstn: "",
    pan: "",
    vat: "",
    website: "",
    contactPerson: "",
    contactPhone: "",
    contactEmail: "",
    address1: {
      address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      facebook: "",
      dlNo: "",
      note: ""
    },
    shippingAddress: {
      address1: "",
      country1: "",
      state1: "",
      city1: "",
      pincode1: "",
      companyNaame1: "",
      gstin1: ""
    },
    isVendor: false,
    shipToMyAddress: false,
    shipToDifferentAddress: false,
  });

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showOtherInfoForm, setShowOtherInfoForm] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showShippingAddress, setShowShippingAddress] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  const handleAddressToggle = () => {
    setShowAddressForm((prev) => !prev);
  };

  const handleOtherInfoToggle = () => {
    setShowOtherInfoForm((prev) => !prev);
  };

  const handleNotesToggle = () => {
    setShowNotes((prev) => !prev);
  };

  const handleShippingAddressToggle = () => {
    setShowShippingAddress((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card className="mx-3 my-4">
      <CardBody>
        <section>
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-4">
              <h4>Add New Vendor</h4>
            </div>
            <hr />

            <div className="row mt-2">
              {/* Left Column */}
              <div className="col-12 col-lg-6 border-end">
                {[
                  { label: "Company Name", name: "companyName" },
                  { label: "Phone", name: "phone" },
                  { label: "Email", name: "email" },
                  { label: "GST Treatment", name: "gstTreatement" },
                  { label: "GSTN", name: "gstn" },
                  { label: "PAN", name: "pan" },
                  { label: "VAT", name: "vat" },
                  { label: "Website", name: "website" }
                ].map((field) => (
                  <div className="row mb-3" key={field.name}>
                    <label className="col-12 col-sm-4 col-form-label">
                      {field.label}
                    </label>
                    <div className="col-12 col-sm-8">
                      <input
                        type="text"
                        name={field.name}
                        className="form-control"
                        value={formData[field.name]}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ))}

                <div className="row mb-3">
                  <div className="col-12 col-sm-4"></div>
                  <div className="col-12 col-sm-8">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="isVendor"
                        className="form-check-input"
                        checked={formData.isVendor}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label">Also as a vendor</label>
                    </div>
                  </div>
                </div>

                <hr />

                {[
                  { label: "Contact Person", name: "contactPerson" },
                  { label: "Contact Phone", name: "contactPhone" },
                  { label: "Contact Email", name: "contactEmail" }
                ].map((field) => (
                  <div className="row mb-3" key={field.name}>
                    <label className="col-12 col-sm-4 col-form-label">
                      {field.label}
                    </label>
                    <div className="col-12 col-sm-8">
                      <input
                        type="text"
                        name={field.name}
                        className="form-control"
                        value={formData[field.name]}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="col-12 col-lg-6">
                <div className="row border-0 py-2" style={{ backgroundColor: "#f1eeee" }}>
                  <div className="col text-center">
                    <a href="#!" onClick={handleAddressToggle} className="d-block">
                      Address
                    </a>
                  </div>
                  <div className="col text-center">
                    <a href="#!" onClick={handleOtherInfoToggle} className="d-block">
                      Other Info
                    </a>
                  </div>
                  <div className="col text-center">
                    <a href="#!" onClick={handleNotesToggle} className="d-block">
                      Notes
                    </a>
                  </div>
                </div>

                {showAddressForm && (
                  <div className="mt-2">
                    <h5>Address Information</h5>
                    {/* Address fields */}
                  </div>
                )}

                {showOtherInfoForm && (
                  <div className="mt-2">
                    <h5>Other Information</h5>
                    {/* Other info fields */}
                  </div>
                )}

                {showNotes && (
                  <div className="mt-3">
                    <h5>Notes</h5>
                    <textarea
                      name="address1.note"
                      className="form-control"
                      rows="4"
                      value={formData.address1.note}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-success" type="submit">
                Save
              </button>
            </div>
          </form>
        </section>
      </CardBody>
    </Card>
  );
};

export default VendorForm;
