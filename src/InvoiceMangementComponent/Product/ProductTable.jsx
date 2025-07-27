import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardBody, CardFooter } from 'reactstrap';
import { DeleteProductByProductId, GetAllProducts } from '../../InvoiceManagementServices/ProductService';
import ServerPagination from '../../InvoiceManagementContext/CommonComponent/ServerPagination';
import norecordfound from "../../assets/images/Invoice images/norecordfound.png";
import "./product.css"
const ProductTable = () => {
  const navigate = useNavigate()
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const handleCheckboxChange = (event) => {
    setDeleteVisible(event.target.checked);
  };

  const [pagination, setPagination] = useState({
    total_records: 0,
    record_per_page: 5,
    active_page: 0,
  })
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(100);

  useEffect(() => {
    AllProductData();
  }, [pagination.active_page])


  const AllProductData = async () => {
    const data = await GetAllProducts(pagination);

    if (data.success) {
      let keys = Object.keys(data.data);

      setPagination((prev) => ({
        ...prev,
        total_records: keys[0],
      }));

      console.log(data.data[keys]);
      setAllProducts(data.data[keys]);
    }

    // alert(JSON.stringify(data));
  };


  const handleUpdateData = (itemId) => {
    navigate(`/dashboard/productlist/product/${itemId}`)
  }

  const handleDeleteData = async (itemId) => {
    let ans = window.confirm(`Do tou want to delete this item`);
    if (ans) {
      await DeleteProductByProductId(itemId);
      setAllProducts([...allProducts.filter(x => x.itemId !== itemId)])

    }
  }

  const handlePageChange = (page) => {
    alert(page)
    console.log("123", pagination)
    setPagination((prev) => ({ ...prev, active_page: page }))
  };

  return (
    <Card><CardBody>
      <section className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-5 col-md-6 col-sm-12 mb-3">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">
                <div className="dropdown">
                  <button
                    className="btn border-0 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter Invoice
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </span>
              <input
                type="search"
                placeholder="search"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-3 text-center">
            <button
              className="btn btn-danger"
              id="deletebtn"
              style={{ display: isDeleteVisible ? 'block' : 'none' }}
            >
              <b>Cancel(1)</b>
            </button>
          </div>
          <div className="col-lg-5 col-md-3 col-sm-6 text-end">
            <Link to={"/dashboard/productlist/product"}>
              <button className="btn btn-success me-3"><b>+ New</b></button>
            </Link>
            <button className="btn btn-secondary"><b>Export</b></button>
          </div>
        </div>

        <div className="row mt-2 ms-2">
          <div className="table-responsive">
            <table className="table">
              <table className="table">
                <thead>
                  <tr style={{ backgroundColor: 'rgb(213, 207, 207)' }}>
                    <th scope="col">
                      <input type="checkbox" style={{ height: '1.5rem', width: '1.5rem' }} />
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Type</th>
                    <th scope="col">Price</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {pagination.total_records > 0 ? (
                    allProducts.map((product, index) => (
                      <tr key={product.itemId || index}>
                        <td scope="row">
                          <input
                            type="checkbox"
                            style={{ height: '1.5rem', width: '1.5rem' }}
                            onChange={handleCheckboxChange}
                          />
                        </td>
                        <td>{product.itemName}</td>
                        <td>{product.description}</td>
                        <td>{product.itemType}</td>
                        <td>{product.percheaseUnitPrice}</td>
                        <td>{product.unit}</td>
                        <td>{product.quantity}</td>
                        <td>
                          <div className="d-flex flex-column flex-md-row align-items-stretch">
                            <button
                              className="btn btn-danger btn-sm me-md-2 mb-2 mb-md-0"
                              onClick={() => handleDeleteData(product.itemId)}
                            >
                              DELETE
                            </button>
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => handleUpdateData(product.itemId)}
                            >
                              Update
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">
                        <div className="record_not_found">
                          <img src={norecordfound} alt="no data found" />
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>


            </table>
          </div>
        </div>
      </section>
    </CardBody>
      {pagination.total_records > pagination.record_per_page &&
        <CardFooter>
          <ServerPagination
            totalItems={pagination.total_records}
            itemsPerPage={pagination.record_per_page}
            currentPage={pagination.active_page}
            onPageChange={handlePageChange}
          />
        </CardFooter>
      }
    </Card>
  );
};

export default ProductTable;
