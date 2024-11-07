import React from 'react'
import LogoSection from './LogoSection'
import InvoiceDetails from './InvoiceDetails'
import BillTotalWrap from './BillTotalWrap'
import "./FirstInvoiceTemplate.css"

const Header = () => {
  return (
    <div className="header">
    <div className="logo_invoice_wrap d-flex justify-content-between">
      <LogoSection />
      <InvoiceDetails />
    </div>
    <BillTotalWrap />
  </div>
  )
}

export default Header