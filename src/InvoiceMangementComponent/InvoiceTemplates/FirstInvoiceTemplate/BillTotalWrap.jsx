import React from 'react'
import "./FirstInvoiceTemplate.css"


const BillTotalWrap = () => {
  return (
    <div className="bill_total_wrap">
      <div className="bill_sec">
        <p>Bill To</p>
        <p className="bold name">Alex Deo</p>
        <span>
          123 walls street, Townhall<br />
          +111 222345667
        </span>
      </div>
      <div className="total_wrap">
        <p>Total Due</p>
        <p className="bold price">USD: $1200</p>
      </div>
    </div>
  )
}

export default BillTotalWrap