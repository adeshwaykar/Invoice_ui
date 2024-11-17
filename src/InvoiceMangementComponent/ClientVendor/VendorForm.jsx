import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, Toast } from "reactstrap";
import CleintVendorAddress from "./CleintVendorAddress";
import Select from "react-select";
import { GstTreatement } from '../CommonComponent/GstTreatement';
import { SaveVendor } from "../../InvoiceManagementServices/VendorService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FormDataVendor=
  {
    vendorClientUniqueId: '',
    companyName: '',
    phone: '',
    email: '',
    gstTreatement: 'Regular',
    gstn: '',
    pan: '',
    vat: '',
    website: '',
    contactPerson: '',
    conatctPhone: '',
    conatctEmail: '',
    address: {
      addressType: 'Office',
      address: '',
      country: 'India',
      state: '',
      city: '',
      pincode: '',
      faceBookNo: '',
      dlNO: '',
      notes: ''
    },
    shippingAddress: [],
    createdDate: new Date().toISOString(),
    type: 'Vendor',
    openingBalance: 0
  }


const VendorForm = () => {
  const navigate=useNavigate()
  const [shippingAddresses, setShippingAddresses] = useState([]); // Array to hold the instances of shipping addresses

  const [vendorData, setVendorData] = useState(FormDataVendor);
  const [shippingAddress,setShippingAdrress]=useState([]);
  const handleInputChange = (input,data) => {
    let name, value;
  
    if (input.target) {
      // Handle text inputs
      name = input.target.name;
      value = input.target.value;
    } else {
      // Handle react-select components
      alert(input.value+"  "+data)
      name = data; // Ensure you set the `name` prop on the `Select` component
      value = input.value;
    }
    setVendorData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddressChange = (input,data) => {
    let name, value;
  
    if (input.target) {
      // Handle text inputs
      name = input.target.name;
      value = input.target.value;
    } else {
      // Handle react-select components
      alert(input.value+"  "+data)
      name = data; // Ensure you set the `name` prop on the `Select` component
      value = input.value;
    }
  
    setVendorData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  
    alert(JSON.stringify(vendorData));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("save Data")
     const response= await SaveVendor(vendorData);
     toast("success","Record save succesfully");
     setVendorData({})
     if(response.success){
      alert("Vendor Saved Successfully");
     }
      // const response = await axios.post('http://localhost:8080/api/vendors', vendorData);
      // console.log('Vendor added:', response.data);
    } catch (error) {
      console.error('There was an error adding the vendor!', error);
    }
  };
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showOtherInfoForm, setShowOtherInfoForm] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showOpeningBalance, setShowOpeningBalance] = useState(false);



  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setShippingAdrress((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  const handleAddressToggle = () => {
    setShowAddressForm(true);
    setShowNotes(false);
    setShowOpeningBalance(false);
  };

  

  const handleNotesToggle = () => {
    setShowAddressForm(false);
    setShowNotes(true);
    setShowOpeningBalance(false);
  };

  const handleOpeningBalanceToggle = () => {
    setShowAddressForm(false);
    setShowNotes(false);
    setShowOpeningBalance(true);

  };

 

  const addShippingAddress = () => {
    setShippingAddresses([...shippingAddresses, shippingAddresses.length + 1]);
};

const removeShippingAddress=(index)=>{
     setShippingAddresses(shippingAddresses.filter(x=>x===index));
}
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
              <div className="col-10 col-lg-6 border-end">
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
                  <div className="row mb-3 me-5" key={field.name}>
                    <label className="col-12 col-sm-4 col-form-label">
                      {field.label}
                    </label>
                    {field.label==="GST Treatment"? (
                    <div className="col-12 col-sm-8">  <Select name="gstTreatement" options={GstTreatement} onChange={(e)=>handleInputChange(e,"gstTreatement")}/></div>):
                    (  <div className="col-12 col-sm-8">
                      <input
                        type="text"
                        name={field.name}
                        className="form-control"
                        value={vendorData[field.name]}
                        onChange={handleInputChange}
                      />
                    </div>
                  )
}
                  </div>
                ))}

                <div className="row mb-3 me-5">
                  <div className="col-12 col-sm-4"></div>
                  <div className="col-12 col-sm-8">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="isVendor"
                        className="form-check-input"
                        checked={vendorData.isVendor}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label">Also as a vendor</label>
                    </div>
                  </div>
                </div>

                <hr />

                {[
                  { label: "Contact Person", name: "contactPerson" },
                  { label: "Contact Phone", name: "conatctPhone" },
                  { label: "Contact Email", name: "conatctEmail" }
                ].map((field) => (
                  <div className="row mb-3 me-5" key={field.name}>
                    <label className="col-12 col-sm-4 col-form-label">
                      {field.label}
                    </label>
                    <div className="col-12 col-sm-8">
                      <input
                        type="text"
                        name={field.name}
                        className="form-control"
                        value={vendorData[field.name]}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="col-12 col-lg-6">
                <div className="row border-0 py-2" style={{ backgroundColor: "#f1eeee" }}>
                  <div className="col text-center" onClick={handleAddressToggle}>
                      Address
                  </div>
                 
                  <div className="col text-center"  onClick={handleNotesToggle}>
                      Notes
                  </div>
                  <div className="col text-center" onClick={handleOpeningBalanceToggle}>
                      Opening Balance
                  </div>
                  <div className="col-3">

                  </div>
                </div>

                {showAddressForm && (
                  <div className="mt-2">
                    <CleintVendorAddress title={"Billing Address"} shippingAddresses={shippingAddresses} addShippingAddress={addShippingAddress}
                    removeShippingAddress={removeShippingAddress}
                    handleAddressChange={handleAddressChange}
                    />
                    {/* Address fields */}
                  </div>
                )}

               

                {showNotes && (
                  <div className="mt-3">
                    <h5>Notes</h5>
                    <textarea
                      name="notes"
                      className="form-control"
                      rows="4"
                      value={vendorData.address.notes}
                      onChange={handleAddressChange}
                    />
                  </div>
                )}

                {showOpeningBalance &&(
                 <div className="row mb-3 mt-4 ms-1" >
                 <label className="col-12 col-sm-4 col-form-label">
                   Opening Balance
                 </label>
                 <div className="col-12 col-sm-8">
                   <input
                     type="text"
                     //name={field.name}
                     className="form-control"
                     //value={vendorData[field.name]}
                     //onChange={handleInputChange}
                   />
                 </div>
               </div>
                )
                  
                }
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-success" type="submit" >
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
