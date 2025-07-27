import React, { useEffect, useState } from 'react'
import { State_city } from '../CommonComponent/CityAndState';
import Select from 'react-select';

const ClientVedorShippingAddress = () => {
    const [state, setState] = useState([]);
    const [city, setCity] = useState();

    useEffect(() => {
        handleStateChange();


    }, [])
    const handleStateChange = () => {
        const keys = Object.keys(State_city)
        const options = []
        keys.map((item, index) => {

            options.push({ value: item, label: item })
        })
        if (options.length > 0) {

            setState(options)
        }
    }



    const handleData = (e) => {
        alert(JSON.stringify(e))
        const data = State_city[e.value]
        const options = []
        data.map((item, index) => {

            options.push({ value: item, label: item })
        })
        if (options.length > 0) {

            setCity(options)
        }

        // alert(JSON.stringify(data))
    }
    return (
        < >
            <h6 className='pt-3 fs-6 fw-bold'><b>{"Shipping Address"}</b></h6>

            <div className='px-3'>


                <div className="row py-3">
                    <div className="col-4">
                        Address
                    </div>
                    <div className="col-8">
                        <input type='text' name='shipAddress' className='form-control'></input>
                    </div>


                </div>
                <div className="row py-3">
                    <div className="col-4">
                        Country
                    </div>
                    <div className="col-8">
                        <Select name='shipCountry'
                            options={[{ value: "India", label: "India" }]} />                   </div>


                </div>
                <div className="row py-3">
                    <div className="col-4">
                        State
                    </div>
                    <div className="col-8">
                        <Select name='shipState'
                            options={state} onChange={(e) => handleData(e)} />

                        {/* <select className='form-control'>
                        <option className='form-control' value="Select State">Select State</option>
                      </select> */}
                    </div>


                </div>
                <div className="row py-3">
                    <div className="col-4">
                        City
                    </div>
                    <div className="col-8">
                        <Select name='shipCity'
                            options={city} />
                    </div>


                </div>
                <div className="row py-3">
                    <div className="col-4">
                        Pincode
                    </div>
                    <div className="col-8">
                        <input type='text' name='shipPincode' className='form-control'></input>
                    </div>


                </div>
                <div className="row py-3">
                    <div className="col-4">
                        Company Name
                    </div>
                    <div className="col-8">
                        <input type='text' name='shipCompanyName' className='form-control'></input>
                    </div>


                </div>
                <div className="row py-3">
                    <div className="col-4">
                        GSTIN
                    </div>
                    <div className="col-8">
                        <input type='text' name='shipGstin' className='form-control'></input>
                    </div>


                </div>


            </div>

        </>
    )
}

export default ClientVedorShippingAddress