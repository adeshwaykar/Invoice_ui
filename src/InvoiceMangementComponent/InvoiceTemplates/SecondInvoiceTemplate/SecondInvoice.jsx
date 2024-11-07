import React from 'react'
import { Card, CardBody } from 'reactstrap';
import InvoiceContentDetails from './InvoiceContentDetails';

const SecondInvoice = () => {
    const companyDetails = {
        name: "Company Name",
        address: "123 Business Rd.",
        cityStateZip: "City, State, Zip",
        email: "info@company.com",
        phone: "(123) 456-7890"
    };

    const invoiceDetails = {
        number: "0001",
        date: "2024-11-02",
        dueDate: "2024-11-16"
    };

    const billTo = {
        name: "Client Name",
        address: "Client Address",
        cityStateZip: "City, State, Zip",
        email: "client@example.com"
    };

    const items = [
        { description: "Service/Product 1", quantity: 2, unitPrice: 50.00 },
        { description: "Service/Product 2", quantity: 1, unitPrice: 150.00 },
        { description: "Service/Product 3", quantity: 3, unitPrice: 30.00 }
    ];

    return (
        <Card>
            <CardBody>
                <InvoiceContentDetails
                    billTo={billTo}
                    companyDetails={companyDetails}
                    invoiceDetails={invoiceDetails}
                    items={items}
                    taxRate={0.1}
                />

            </CardBody>
        </Card>
    );
}

export default SecondInvoice