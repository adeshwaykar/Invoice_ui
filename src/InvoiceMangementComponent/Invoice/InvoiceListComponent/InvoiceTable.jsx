import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'reactstrap';

const InvoiceTable = ({ listOfAllInvoices }) => {
    const navigate=useNavigate();
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleCheckboxChange = (event) => {
    setShowDeleteButton(event.target.checked);
  };

  const CreateInvoice=()=>{
    navigate("/dashboard/invoice/createInvoice"); // Using relative path
  }

  return (
    <Card>
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-5 col-12">
          <div className="input-group mb-3">
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
              placeholder="search"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>
        <div className="col-md-3 d-none d-md-block"></div>
        <div className="col-md-1 col-6 mb-2">
          <button
            className="btn btn-danger"
            id="deletebtn"
            style={{ display: showDeleteButton ? 'block' : 'none' }}
          >
            <b>Cancel (1)</b>
          </button>
        </div>
        <div className="col-md-3 col-6 d-flex justify-content-md-end">
          <a href="#" >
            <button className="btn btn-success me-2" onClick={CreateInvoice}>
              <b>+ New</b>
            </button>
          </a>
          <a>
          <button className="btn btn-secondary" >
            <b>Export</b>
          </button>
          </a>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr style={{ backgroundColor: 'rgb(213, 207, 207)' }}>
                  <th scope="col">
                    <input type="checkbox" style={{ height: '1.5rem', width: '1.5rem' }} />
                  </th>
                  <th scope="col">Issue Date</th>
                  <th scope="col">Doc.No.</th>
                  <th scope="col">Status</th>
                  <th scope="col" colSpan="3">Client Name</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Tax</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date of Payment</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Dr/Cr</th>
                </tr>
              </thead>
              <tbody>
                {listOfAllInvoices.map((invoice, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        style={{ height: '1.5rem', width: '1.5rem' }}
                        onChange={handleCheckboxChange}
                      />
                    </td>
                    <td>{invoice.invoiceDate}</td>
                    <td>{invoice.invoiceNumber}</td>
                    <td></td>
                    <td colSpan="3">{invoice.clientName}</td>
                    <td>{invoice.dueDate}</td>
                    <td>{invoice.tax}</td>
                    <td>{invoice.total}</td>
                    <td>-</td>
                    <td>{invoice.balance}</td>
                    <td>{invoice.drCr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </Card>
  );
};

export default InvoiceTable;
