import React, { useEffect, useState } from 'react';
import { Card, CardBody, Toast } from 'reactstrap';
import { GetProductByProductId, SaveProduct, UpdateProductByProductId } from '../../InvoiceManagementServices/ProductService';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
   // Define the initial state for formData
   const initialFormData = {
    itemId: "",
    itemType: "product",
    itemName: '',
    description: '',
    quantity: 0,
    unit: '',
    tax: 0.0,
    hsn: '',
    sku: '',
    sac: '',
    saleUnitPrice: 0.0,
    saleCurrency: '',
    cess: 0.0,
    cess1: 0.0,
    percheaseUnitPrice: 0.0,
    percheaseCurrency: '',
    percheasecess2: 0.0,
    percheasecess3: 0.0,
    isDeleted: false,
};
const Product = () => {
    const [checkProductOrService, setcheckProductOrService] = useState();
    const param = useParams();
    // State hooks to handle form input values
   const nevigate= useNavigate();


    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (param.id != null && param.id != "" && param.id != undefined) {
            getProductById(param.id)
        }
    }, param.id)

    const getProductById = async (itemId) => {
        const data = await GetProductByProductId(itemId);
        if (data.success) {
            setFormData(data.data);
        }
    }
    //UpdateProductByProductId
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform form submission logic (e.g., sending the data to the server)
        const response = await SaveProduct(formData)
        console.log(formData);
    };


    const handleUpdate = async (e) => {

        e.preventDefault();
        // Perform form submission logic (e.g., sending the data to the server)
        const response = await UpdateProductByProductId(formData.itemId, formData)
        if(response.success){
       
        nevigate(-1)
        console.log(formData);
        }
    }

    const clearAllFeild=()=>{
        setFormData(initialFormData);
    }


    return (
        <Card>
            <CardBody>
                <div className="container">
                    <form onSubmit={(e) => { param.id ? handleUpdate(e) : handleSubmit(e) }}>
                        <div className="row mt-3 mb-2">
                            <div className="col-1 mt-5 text-center">New Items</div>
                            <div className="btn-group col-3 mb-2 mt-2" role="group">
                                <button type="button" className="btn btn-outline-primary" onClick={() => setFormData((prevData) => ({
                                    ...prevData,
                                    ["itemType"]: "product"
                                }))}>Product</button>
                            <button type="button" className="btn btn-outline-primary" onClick={() => setFormData((prevData) => ({
                                    ...prevData,
                                    ["itemType"]: "service"
                                }))}>Service</button>
                        </div>
                </div>

                <div className="row mt-5 mb-2 d-flex ">

                    <div className="col d-flex">
                        <div className="px-3">Name</div>
                        <input
                            type="text"
                            className="form-control"
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="col d-flex">
                        <div className="px-3">Description</div>
                        <textarea
                            className="form-control"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="1"
                        />
                    </div>
                </div>

                <div className="row mt-4">

                    <div className="col d-flex">
                        <div className="px-3">Quantity</div>
                        <input
                            type="text"
                            className="form-control"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="col d-flex">
                        <div className=" px-3">UNIT</div>

                        <input
                            type="text"
                            className="form-control"
                            name="unit"
                            value={formData.unit}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col d-flex">
                        <div className="px-3 text-center">Tax</div>

                        <input
                            type="text"
                            className="form-control"
                            name="tax"
                            value={formData.tax}
                            onChange={handleChange}
                        />
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col d-flex">
                        <div className="px-3">HSN</div>

                        <input
                            type="text"
                            className="form-control"
                            name="hsn"
                            value={formData.hsn}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col d-flex">
                        <div className="px-2 align-item-center">SKU</div>
                        <input
                            type="text"
                            className="form-control"
                            name="sku"
                            value={formData.sku}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row mt-4">


                </div>

                <div className="row mt-5">
                    <div className="col-6 ">
                        <div className="row me-1">
                            <div className="col border-bottom">Sales Info</div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2">Unit Price</div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="saleUnitPrice"
                                    value={formData.saleUnitPrice}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-2 text-end">Currency</div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="saleCurrency"
                                    value={formData.saleCurrency}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2">CESS%</div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cess"
                                    value={formData.cess}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-2 text-end">+ CESS%</div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cess1"
                                    value={formData.cess1}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-6 ">
                        <div className="row ms-1">
                            <div className="col border-bottom">Purchase Info</div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 text-end">Unit Price</div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="percheaseUnitPrice"
                                    value={formData.percheaseUnitPrice}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-2 text-end">Currency</div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="percheaseCurrency"
                                    value={formData.percheaseCurrency}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-2 text-end">CESS%</div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="percheasecess2"
                                    value={formData.percheasecess2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-2 text-end">+ CESS%</div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="percheasecess3"
                                    value={formData.percheasecess3}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row border-top mt-5">
                    <div className="col-3 d-flex mt-4">
                        <button className="btn btn-success ms-2 form-control " type="submit">
                            {(param.id!=undefined && param.id!="")?<>update</>:<>save</> }
                            
                
                            </button>
                            {(param.id===undefined || param.id==="")?<>
                            

                        <button className="btn btn-secondary ms-3 form-control" type="button" onClick={()=>clearAllFeild()}>Cancel</button>
                        </>:""}
                    </div>

                </div>
            </form>

        </div>
            </CardBody >
        </Card >
    );
};

export default Product;
