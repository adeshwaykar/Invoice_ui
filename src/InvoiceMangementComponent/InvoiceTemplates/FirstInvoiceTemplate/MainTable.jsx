import React from 'react'
import "./FirstInvoiceTemplate.css"


const MainTable = ({ items }) => {
  return (
    <div className="main_table">
      <div className="table_header">
        <div className="row">
          <div className="col col_no">NO.</div>
          <div className="col col_des">ITEM DESCRIPTION</div>
          <div className="col col_price">PRICE</div>
          <div className="col col_qty">QTY</div>
          <div className="col col_total">TOTAL</div>
        </div>
      </div>
      <div className="table_body">
        {items.map((item) => (
          <div className="row" key={item.id}>
            <div className="col col_no">
              <p>{item.id}</p>
            </div>
            <div className="col col_des">
              <p className="bold">{item.description}</p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="col col_price">
              <p>${item.price}</p>
            </div>
            <div className="col col_qty">
              <p>{item.quantity}</p>
            </div>
            <div className="col col_total">
              <p>${item.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainTable