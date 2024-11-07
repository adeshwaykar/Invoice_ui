import React, { useState } from 'react'
import { Card, CardBody, CardFooter, CardTitle } from 'reactstrap'
import VendorHeader from './VendorHeader'
import VendorTable from './VendorTable'
import ServerPagination from '../../InvoiceManagementContext/CommonComponent/ServerPagination'
import { Alert } from 'bootstrap'

const listVendor = [
    {
      companyName: "Acme Corp",
      contactPerson: "John Doe",
      billingAddress: "123 Main St",
      city: "New York",
      email: "john.doe@acmecorp.com",
      phone: "+1 555-123-4567",
    },
    {
      companyName: "Globex Corporation",
      contactPerson: "Jane Smith",
      billingAddress: "456 Elm St",
      city: "Los Angeles",
      email: "jane.smith@globex.com",
      phone: "+1 555-987-6543",
    },
    {
      companyName: "Initech",
      contactPerson: "Peter Gibbons",
      billingAddress: "789 Maple Ave",
      city: "Chicago",
      email: "peter.gibbons@initech.com",
      phone: "+1 555-555-5555",
    },
    {
      companyName: "Hooli",
      contactPerson: "Richard Hendricks",
      billingAddress: "101 Technology Dr",
      city: "San Francisco",
      email: "richard@hooli.com",
      phone: "+1 555-444-4444",
    },
    {
      companyName: "Stark Industries",
      contactPerson: "Tony Stark",
      billingAddress: "202 Industrial Way",
      city: "Detroit",
      email: "tony.stark@starkindustries.com",
      phone: "+1 555-333-3333",
    },
    {
      companyName: "Wayne Enterprises",
      contactPerson: "Bruce Wayne",
      billingAddress: "303 Gotham Blvd",
      city: "Gotham",
      email: "bruce.wayne@wayneenterprises.com",
      phone: "+1 555-222-2222",
    },
    {
      companyName: "Umbrella Corporation",
      contactPerson: "Alice Johnson",
      billingAddress: "404 Zombie Rd",
      city: "Raccoon City",
      email: "alice.johnson@umbrella.com",
      phone: "+1 555-111-1111",
    },
  ];
  
  // You can then map over this listVendor array to generate your table rows in your component
  
const VendorList = () => {
    const [vendors, setVendors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(100);

    const handlePageChange = (page) => {
      alert(page)
        setCurrentPage(page);
      };
    return (
        <div>
            <section>
                <Card>
                    <CardTitle>
                        <VendorHeader />
                    </CardTitle>
                    <CardBody>
                        <VendorTable listVendor={listVendor}/>
                        <ServerPagination 
                         totalItems={totalItems}
                         itemsPerPage={itemsPerPage}
                         currentPage={currentPage}
                         onPageChange={handlePageChange}
                        />
                    </CardBody>
                   
                </Card>
            </section>
        </div>
    )
}

export default VendorList