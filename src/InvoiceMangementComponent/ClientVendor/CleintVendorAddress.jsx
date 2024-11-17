import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { State_city } from '../CommonComponent/CityAndState';
import ClientVedorShippingAddress from './ClientVedorShippingAddress';


const CleintVendorAddress = ({ title,shippingAddresses,addShippingAddress,removeShippingAddress ,handleAddressChange}) => {
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    useEffect(() => {
        handleStateChange();
    }, []);

    const handleStateChange = () => {   
        const keys = Object.keys(State_city);
        const options = keys.map((item) => ({
            value: item,
            label: item,
        }));
        if (options.length > 0) {
            setState(options);
        }
    };

    const handleData = (e) => {
        alert(JSON.stringify(e));
        const data = State_city[e.value];
        const options = data.map((item) => ({
            value: item,
            label: item,
        }));
        if (options.length > 0) {
            setCity(options);
        }
    };

   

    return (
        <>
            <div className='p-3'>
                <h6 className='fs-6 fw-bold'>{title}</h6>

                <div className="row py-3">
                    <div className="col-4 ">Address</div>
                    <div className="col-8">
                        <input type='text' name='address'  className='form-control' onChange={handleAddressChange}/>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-4">Country</div>
                    <div className="col-8">
                        <Select name='country' options={[{ value: 'India', label: 'India' }]} onChange={(e)=>{handleAddressChange(e,"country")}}/>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-4">State</div>
                    <div className="col-8">
                    <Select name='state' options={state} onChange={(e) => {handleData(e);handleAddressChange(e,"state")}}/>                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-4">City</div>
                    <div className="col-8">
                        <Select name='city' options={city} onChange={(e)=>{handleAddressChange(e,"city")}}/>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-4">Pincode</div>
                    <div className="col-8">
                        <input type='text' name='pincode' className='form-control' onChange={handleAddressChange}/>
                    </div>
                </div>

               


                {/* Render shipping address components dynamically */}
                {shippingAddresses.map((remove, index) =>
           
                (<>
                    <ClientVedorShippingAddress />
                    <div className="row mb-2">
                    <div className="col">
                        <button className="btn btn-danger" onClick={()=>removeShippingAddress(remove)}>
                            Remove
                        </button>
                    </div>
                </div>
                    </>
                ))}
                <div className="row">
                    <div className="col">
                        <button className="btn btn-secondary" onClick={addShippingAddress}>
                            + Add Shipping Address
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CleintVendorAddress;
