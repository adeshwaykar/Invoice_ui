import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const VendorTable = ({ listVendor }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  // Handle checkbox selection to display delete button
  const handleCheckboxChange = (event) => {
    setShowDeleteBtn(event.target.checked);
  };

  // Confirm deletion
  const confirmDeleteVendor = () => {
    return window.confirm("Are you sure you want to delete this client?");
  };

  return (




    <div className="row mt-2">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr style={{ backgroundColor: 'rgb(213, 207, 207)' }}>
                <th scope="col">
                  <input type="checkbox" style={{ height: '1.5rem', width: '1.5rem' }} />
                </th>
                <th scope="col">Company Name</th>
                <th scope="col">Contact Name</th>
                <th scope="col">Billing Address</th>
                <th scope="col">City</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listVendor.map((vendor, index) => (
                <tr key={index}>
                  <td scope="row">
                    <input
                      type="checkbox"
                      style={{ height: '1.5rem', width: '1.5rem' }}
                    />
                  </td>
                  <td>{vendor.companyName}</td>
                  <td>{vendor.contactPerson}</td>
                  <td>{vendor.address?vendor.address.address.slice(0,10):""}...</td>
                  <td>{vendor.address?vendor.address.city:""}</td>
                  <td>{vendor.email}</td>
                  <td>{vendor.phone}</td>
                  <td>
                    <div className='d-flex flex-column flex-md-row align-items-stretch'>
                      <button className="btn btn-danger btn-sm me-md-2 mb-2 mb-md-0" onClick={() => confirmDeleteVendor()}>
                        DELETE
                      </button>
                      <button className="btn btn-info btn-sm">Update</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>



  );
};

export default VendorTable;
