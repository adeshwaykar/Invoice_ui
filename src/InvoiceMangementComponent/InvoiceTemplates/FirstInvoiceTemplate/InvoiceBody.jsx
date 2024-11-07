import React from 'react'
import MainTable from './MainTable';
import PaymentSummary from './PaymentSummary';
import "./FirstInvoiceTemplate.css"

const InvoiceBody = () => {
    const items = [
        { id: 1, description: "Web Design", price: 350, quantity: 2, total: 700 },
        { id: 2, description: "Web Development", price: 350, quantity: 2, total: 700 },
        { id: 3, description: "GitHub", price: 120, quantity: 1, total: 120 },
        { id: 4, description: "Backend Design", price: 350, quantity: 2, total: 700 },
        { id: 5, description: "Backend Development", price: 150, quantity: 1, total: 150 },
      ];
  return (
    <div className="body">
      <MainTable items={items} />
      <PaymentSummary />
    </div>
  )
}

export default InvoiceBody