import React from 'react'
import InvoiceTable from './InvoiceTable'

const InvoiceList = () => {
  const invoices = [
    { invoiceDate: '24-may-2022', invoiceNumber: '1', clientName: 'rahul', dueDate: '22-may-2032', tax: '14%', total: '25622', balance: '23300', drCr: 'dr' },
   
  ];
  return (
    <InvoiceTable listOfAllInvoices={invoices} />






  )
}

export default InvoiceList