import React from 'react'
import "./FirstInvoiceTemplate.css"

const PaymentSummary = () => {
  return (
    <div className="paymethod_grandtotal_wrap d-flex justify-contain-between">
    <div className="paymethod_sec">
      <p className="bold">Payment Method</p>
      <p>Visa, Master Card and We accept Cheque</p>
    </div>
    <div className="grandtotal_se   c  justify-contain-end ">
      <p className="bold d-flex justify-contain-between">
        <span>SUB TOTAL</span>
        <span>$7500</span>
      </p>
      <p>
        <span>Tax Vat 18%</span>
        <span>$200</span>
      </p>
      <p>
        <span>Discount 10%</span>
        <span>-$700</span>
      </p>
      <p className="bold">
        <span>Grand Total</span>
        <span>$7000.00</span>
      </p>
    </div>
  </div>
  )
}

export default PaymentSummary