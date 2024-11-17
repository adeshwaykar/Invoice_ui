import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VendorHeader = () => {
  const navigate=useNavigate()
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const handleRedirect=()=>{
      navigate("vendorForm")
  }
  return (
    <div className="mt-3 d-flex justify-content-between align-items-center px-4">
      <div className="col-md-5">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            <div className="dropdown">
              <button
                className="btn border-0 dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter Invoice
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </span>
          <input
            type="search"
            placeholder="Search"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
      </div>

      <div className="col-md-3 d-flex justify-content-end gap-2">
        {showDeleteBtn && (
          <button className="btn btn-danger btn-sm" id="deletebtn">
            <b>Cancel (1)</b>
          </button>
        )}
        <button className="btn btn-success" id="newbtn" onClick={()=>handleRedirect()}>
          <b>New +</b>
        </button>
        <button className="btn btn-secondary" id="exportbtn">
          <b>Export</b>
        </button>
      </div>
    </div>
  );
};

export default VendorHeader;
