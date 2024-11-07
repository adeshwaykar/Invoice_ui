import React, { useRef, useState } from 'react'
import "./mainInvoice.css"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Card, CardBody } from 'reactstrap';
import Loader from '../../../layouts/loader/Loader';
const InvoiceContentDetails = ({
    companyDetails,
    invoiceDetails,
    billTo,
    items,
    taxRate = 0.1,
}) => {
    const [loader, setLoader] = useState(false);
    const subtotal = items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    const pdfContentRef = useRef();

    const generatePDF = async () => {
        const element = pdfContentRef.current;
        setLoader(true);
        // Show the hidden element for PDF generation
        element.style.display = 'block';

        // Capture element as canvas
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        // Hide the element again after capture
        element.style.display = 'none';
        setLoader(false);

        // Generate and save PDF
        const pdf = new jsPDF('portrait', 'pt', [canvas.width, canvas.height]);
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('invoice.pdf');
    };

    return (
        <>
            {loader && <Loader />}
            <div className="invoice-container">
                        <div className="header">
                            <div className="company-info">
                                <p>Company/Seller Name: Example Company Pvt. Ltd.</p>
                                <p>Address: 123 Business Rd, City, State, 123456</p>
                                <p>Phone No.: 123-456-7890</p>
                                <p>Email ID: example@company.com</p>
                                <p>GSTIN: 27AAAPL1234F1Z1</p>
                                <p>State: Maharashtra</p>
                            </div>
                            <div className="logo">
                                <img src="C:\UsersAdesh Waykar/Downloads/materialpro-react-lite-master/package/src/assets/images/logos/VR.jpeg" alt="Vyapar Logo" />
                            </div>
                        </div>

                        <h1 className="invoice-title">Tax Invoice</h1>

                        <div className="billing-info">
                            <div className="bill-to">
                                <p><strong>Bill To:</strong></p>
                                <p>Name: John Doe</p>
                                <p>Address: 456 Main St, City, State, 654321</p>
                                <p>Contact No.: 987-654-3210</p>
                                <p>GSTIN No.: 27AAAPL5678F1Z2</p>
                                <p>State: Maharashtra</p>
                            </div>
                            <div className="shipping-info">
                                <p><strong>Shipping To:</strong></p>
                                <p>Invoice No.: ABC-2022-0001</p>
                                <p>Date: 01/01/2022</p>
                            </div>
                        </div>

                        <table className="invoice-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item name</th>
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                    <th>Price/Unit</th>
                                    <th>Discount</th>
                                    <th>CGST</th>
                                    <th>SGST</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Item 1</td>
                                    <td>2</td>
                                    <td>₹</td>
                                    <td>200.00</td>
                                    <td>20</td>
                                    <td>5%</td>
                                    <td>5%</td>

                                    <td>189</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Item 2</td>
                                    <td>3</td>
                                    <td>₹</td>
                                    <td>150.00</td>
                                    <td>15</td>
                                    <td>5%</td>
                                    <td>5%</td>

                                    <td>427.5</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Item 3</td>
                                    <td>1</td>
                                    <td>₹</td>
                                    <td>500.00</td>
                                    <td>0</td>
                                    <td>5%</td>
                                    <td>5%</td>

                                    <td>525</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5">Total</td>
                                    <td>6</td>
                                    <td>35</td>
                                    <td>94.75</td>
                                    <td>1141.5</td>
                                </tr>
                            </tfoot>
                        </table>

                        <div className="total-info row" >
                            <div className="col-9">
                                <p>Amount in words: One Thousand One Hundred Forty-One and Fifty Paise</p>

                            </div>
                            <div className="col-3">
                                <div className="sub-total">
                                    <div className=" d-flex justify-content-between">
                                        <p className=''>Sub Total: </p>
                                        <p>1150.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Discount:</p>
                                        <p>35</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>SGST: </p>
                                        <p>47.375</p>

                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>CGST: </p>
                                        <p>47.375</p>

                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p><strong>Total: </strong></p>
                                        <p>1141.5</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Received:</p>
                                        <p> 1141.5</p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p>Balance: </p>
                                        <p>0.00</p>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="terms">
                            <p><strong>Terms & Conditions</strong></p>
                            <p>All sales are final. No returns accepted after 30 days.</p>
                            <p>Company seal and Sign</p>
                        </div>
                    </div>
            {/* this is my hidden Component */}

            <div ref={pdfContentRef} className="invoice-box1">
                
                    {/* Fixed content for PDF generation */}
                    {/* <div className="invoice-header1  d-flex justify-content-between">
                        <div className="company-details1">
                            <h2>{companyDetails.name}</h2>
                            <p>{companyDetails.address}</p>
                            <p>{companyDetails.cityStateZip}</p>
                            <p>Email: {companyDetails.email}</p>
                            <p>Phone: {companyDetails.phone}</p>
                        </div>
                        <div className="invoice-details1 ">
                            <h2>Invoice</h2>
                            <p>Invoice #: {invoiceDetails.number}</p>
                            <p>Date: {invoiceDetails.date}</p>
                            <p>Due Date: {invoiceDetails.dueDate}</p>
                        </div>
                    </div>

                    <div className="bill-to1">
                        <h2>Bill To:</h2>
                        <p>{billTo.name}</p>
                        <p>{billTo.address}</p>
                        <p>{billTo.cityStateZip}</p>
                        <p>Email: {billTo.email}</p>
                    </div>

                    <table className="invoice-table1">
                        <thead>
                            <tr>
                                <th>Item Description</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.unitPrice.toFixed(2)}</td>
                                    <td>${(item.quantity * item.unitPrice).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="total-section1">
                        <p>Subtotal: ${(items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0)).toFixed(2)}</p>
                        <p>Tax ({(taxRate * 100).toFixed(0)}%): ${((items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0)) * taxRate).toFixed(2)}</p>
                        <p>Total: ${((items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0)) * (1 + taxRate)).toFixed(2)}</p>
                    </div> */}
                    <div className="invoice-container">
                        <div className="header">
                            <div className="company-info">
                                <p>Company/Seller Name: Example Company Pvt. Ltd.</p>
                                <p>Address: 123 Business Rd, City, State, 123456</p>
                                <p>Phone No.: 123-456-7890</p>
                                <p>Email ID: example@company.com</p>
                                <p>GSTIN: 27AAAPL1234F1Z1</p>
                                <p>State: Maharashtra</p>
                            </div>
                            <div className="logo">
                                <img src="path/to/logo.png" alt="Vyapar Logo" />
                            </div>
                        </div>

                        <h1 className="invoice-title">Tax Invoice</h1>

                        <div className="billing-info">
                            <div className="bill-to">
                                <p><strong>Bill To:</strong></p>
                                <p>Name: John Doe</p>
                                <p>Address: 456 Main St, City, State, 654321</p>
                                <p>Contact No.: 987-654-3210</p>
                                <p>GSTIN No.: 27AAAPL5678F1Z2</p>
                                <p>State: Maharashtra</p>
                            </div>
                            <div className="shipping-info">
                                <p><strong>Shipping To:</strong></p>
                                <p>Invoice No.: ABC-2022-0001</p>
                                <p>Date: 01/01/2022</p>
                            </div>
                        </div>

                        <table className="invoice-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item name</th>
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                    <th>Price/Unit</th>
                                    <th>Discount</th>
                                    <th>CGST</th>
                                    <th>SGST</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Item 1</td>
                                    <td>2</td>
                                    <td>₹</td>
                                    <td>200.00</td>
                                    <td>20</td>
                                    <td>5%</td>
                                    <td>5%</td>

                                    <td>189</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Item 2</td>
                                    <td>3</td>
                                    <td>₹</td>
                                    <td>150.00</td>
                                    <td>15</td>
                                    <td>5%</td>
                                    <td>5%</td>

                                    <td>427.5</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Item 3</td>
                                    <td>1</td>
                                    <td>₹</td>
                                    <td>500.00</td>
                                    <td>0</td>
                                    <td>5%</td>
                                    <td>5%</td>

                                    <td>525</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5">Total</td>
                                    <td>6</td>
                                    <td>35</td>
                                    <td>94.75</td>
                                    <td>1141.5</td>
                                </tr>
                            </tfoot>
                        </table>

                        <div className="total-info row" >
                            <div className="col-9">
                                <p>Amount in words: One Thousand One Hundred Forty-One and Fifty Paise</p>

                            </div>
                            <div className="col-3">
                                <div className="sub-total">
                                    <div className=" d-flex justify-content-between">
                                        <p className=''>Sub Total: </p>
                                        <p>1150.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Discount:</p>
                                        <p>35</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>SGST: </p>
                                        <p>47.375</p>

                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>CGST: </p>
                                        <p>47.375</p>

                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p><strong>Total: </strong></p>
                                        <p>1141.5</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Received:</p>
                                        <p> 1141.5</p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p>Balance: </p>
                                        <p>0.00</p>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="terms">
                            <p><strong>Terms & Conditions</strong></p>
                            <p>All sales are final. No returns accepted after 30 days.</p>
                            <p>Company seal and Sign</p>
                        </div>
                    </div>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-success btn-sm ms-2" onClick={generatePDF}>Download PDF</button>
                <button className="btn btn-info btn-sm ms-2" onClick={generatePDF}>Save As Draft</button>
                <button className="btn btn-danger btn-sm ms-2" onClick={generatePDF}>Cancel/Delete</button>
            </div>

        </>
    );
}
export default InvoiceContentDetails