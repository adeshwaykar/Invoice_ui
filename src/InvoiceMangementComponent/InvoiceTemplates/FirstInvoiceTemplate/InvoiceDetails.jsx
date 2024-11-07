import React from 'react'
import "./FirstInvoiceTemplate.css"

const InvoiceDetails = () => {
  return (
    <div className="invoice_sec">
      <p className="invoice bold">INVOICE</p>
      <p className="invoice_no">
        <span className="bold">Invoice</span>
        <span>#3488</span>
      </p>
      <p className="date">
        <span className="bold">Date</span>
        <span>08/Jan/2022</span>
      </p>
    </div>
  )
}

export default InvoiceDetails