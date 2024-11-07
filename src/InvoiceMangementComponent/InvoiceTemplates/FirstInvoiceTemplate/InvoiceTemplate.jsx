import React from 'react'
import Header from './Header'
import InvoiceBody from './InvoiceBody'
import Footer from './Footer'
import "./FirstInvoiceTemplate.css"
import { Card } from 'reactstrap'

const InvoiceTemplate = () => {
  return (
    <div className="wrapper">
    <div className="invoice_wrapper">
        <Card className='p-4 '>
      <Header />
      <InvoiceBody />
      <Footer />
      </Card>
    </div>
  </div>
  )
}

export default InvoiceTemplate