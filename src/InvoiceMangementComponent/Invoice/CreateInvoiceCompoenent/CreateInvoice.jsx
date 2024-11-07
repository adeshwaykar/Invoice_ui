import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateInvoice.css';
import { Card, CardBody } from 'reactstrap';

const CreateInvoice = () => {
    
  const [invoiceData, setInvoiceData] = useState({
    clientName: '',
    invoiceNumber: '',
    invoicenumber2: '',
    poNumber: '',
    invoiceDate: '',
    poDate: '',
    dueDate: '',
    paymentTerm: '',
    shippingCharges: '',
    subtotal: 0,
    total: 0,
    terms: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({
      ...invoiceData,
      [name]: value,
    });
  };

  const addData = () => {
    // Logic for adding data row
  };

  const testDemo = () => {
    // Logic for cancel operation
  };

  return (
    <Card>
      <CardBody>
    <div className="container-fluid">
      <form action="/user/createinvoice" method="post">
        <div className="row ms-2">
          <div className="col mb-3 mt-4">
            <h5><b>Add New Invoice</b></h5>
          </div>
        </div>
        <hr />

        {/* Client Name Selection */}
        <div className="row mt-3 border-bottom">
          <div className="col-12 col-md-2 mb-4 ms-0">Client Name</div>
          <div className="col-12 col-md-6 mb-4 ms-4">
            <select 
              className="form-select" 
              name="clientName"
              onChange={handleInputChange}
              value={invoiceData.clientName}
              id="client_Name"
              aria-label="Select Client Name"
            >
              {/* Render options dynamically */}
              <option value="">Select Client</option>
              <option value="Example Client">Example Client</option>
              <option value="newClient" style={{ backgroundColor: 'green', color: 'white' }}>
                + Add New Client
              </option>
            </select>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="row mt-4 mb-2 border-bottom">
          <div className="col-12 col-md-4 mb-4">
            <div className="row">
              <div className="col-4">Invoice No</div>
              <div className="col-8">
                <input 
                  type="text" 
                  name="invoiceNumber" 
                  className="form-control"
                  onChange={handleInputChange}
                  value={invoiceData.invoiceNumber}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4">PO No</div>
              <div className="col-8">
                <input 
                  type="text" 
                  name="poNumber" 
                  className="form-control"
                  onChange={handleInputChange}
                  value={invoiceData.poNumber}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="row">
              <div className="col-5">Invoice Date</div>
              <div className="col-7">
                <input 
                  type="date" 
                  name="invoiceDate" 
                  className="form-control"
                  onChange={handleInputChange}
                  value={invoiceData.invoiceDate}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-5">PO Date</div>
              <div className="col-7">
                <input 
                  type="date" 
                  name="poDate" 
                  className="form-control"
                  onChange={handleInputChange}
                  value={invoiceData.poDate}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="row">
              <div className="col-5">Due Date</div>
              <div className="col-7">
                <input 
                  type="date" 
                  name="dueDate" 
                  className="form-control"
                  onChange={handleInputChange}
                  value={invoiceData.dueDate}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-5">Payment Terms</div>
              <div className="col-7">
                <input 
                  type="text" 
                  name="paymentTerm" 
                  className="form-control"
                  onChange={handleInputChange}
                  value={invoiceData.paymentTerm}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Table */}
        <div className="row">
  <div className="col-12">
    {/* Responsive wrapper */}
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="table-active">
          <tr>
            <th scope="col">No</th>
            <th scope="col-5">Product Name</th>
            <th scope="col">Unit</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Tax</th>
            <th scope="col-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className='col-4'>
              <select className="form-select" aria-label="Select Product" id="product_Name">
                <option value="#">Select Product</option>
                <option value="Example Product">Example Product</option>
              </select>
              <textarea className="form-control mt-3" id="description"></textarea>
            </td>
            <td><input type="number" className="form-control" placeholder="Unit" /></td>
            <td><input type="number" className="form-control" placeholder="Qty" /></td>
            <td><input type="number" className="form-control" placeholder="Price" /></td>
            <td><input type="number" className="form-control" placeholder="Discount" /></td>
            <td><input type="number" className="form-control" placeholder="Tax" /></td>
            <td className='col-2'><button className="btn btn-info" type="button" onClick={addData}>+ Add Line</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


        <hr />

        {/* Footer Actions */}
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="check1" />
              <label className="form-check-label ms-2">Add Shipping Charges</label>
            </div>
            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" id="check2" />
              <label className="form-check-label ms-2">Add Discount to All</label>
            </div>
          </div>

          <div className="col-12 col-md-5 text-md-end mt-3 mt-md-0">
            <div className="row mb-2">
              <div className="col-6">Subtotal:</div>
              <div className="col-6 text-end"><b>₹{invoiceData.subtotal.toFixed(2)}</b></div>
            </div>
            <div className="row">
              <div className="col-6">Total:</div>
              <div className="col-6 text-end"><b>₹{invoiceData.total.toFixed(2)}</b></div>
            </div>
          </div>
        </div>

        <hr />

        {/* Terms & Notes */}
        <div className="row">
          <div className="col-12 col-md-6">
            <label><b>Terms & Conditions</b></label>
            <textarea 
              className="form-control" 
              rows="4" 
              name="terms"
              onChange={handleInputChange}
              value={invoiceData.terms}
            ></textarea>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <label><b>Private Notes (not shown to client)</b></label>
            <textarea 
              className="form-control" 
              rows="4" 
              name="notes"
              onChange={handleInputChange}
              value={invoiceData.notes}
            ></textarea>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="row mt-4">
          <div className="col-12 d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-success me-2" type="submit">Preview & Save</button>
            <button className="btn btn-secondary me-2" type="button">Save Draft</button>
            <button className="btn btn-primary me-2" type="button">Save & Send</button>
            <button className="btn btn-danger" type="button" onClick={testDemo}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
    </CardBody>
    </Card>
  );
};

export default CreateInvoice;
