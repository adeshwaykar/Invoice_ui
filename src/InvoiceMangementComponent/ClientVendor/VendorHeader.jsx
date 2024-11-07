import React, { useState } from 'react'

const VendorHeader = () => {
    const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  return (
    <div className="row mt-3">
    <div className="col-12 col-md-5 mb-3 mb-md-0">
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

    <div className="col-6 col-md-2 d-flex justify-content-center">
      {showDeleteBtn && (
        <button className="btn btn-danger w-100" id="deletebtn">
          <b>Cancel (1)</b>
        </button>
      )}
    </div>
  </div>
  )
}

export default VendorHeader