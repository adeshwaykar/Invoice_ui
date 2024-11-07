import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate, useNavigation } from 'react-router-dom'


const Registration = () => {

   const navigate= useNavigate()
    const [checkVerifyButtonText, setCheckVerifyButtonText] = useState(false);

    const [isCheckEmailVArification, setIsCheckEmailVArification] = useState(false);

    const SendOtpToPartner = () => {
        setCheckVerifyButtonText(true)

    }

    const VerifyOtp = () => {
        setIsCheckEmailVArification(true)
    }

    const saveUser = () => {

       navigate("/dashboard")
    }

    return (



        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 form-start p-5">
            {!isCheckEmailVArification &&
                <form>
                    <div className="text-center">
                        <h3 className="">Email Varification</h3>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">BS</p>
                    </div>

                    {/* First Name input */}
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder=""
                        />
                        <label className="form-label" htmlFor="firstName">
                            Email
                        </label>
                    </div>

                    {/* Last Name input */}
                    {checkVerifyButtonText &&
                        <div className="form-outline mb-4">
                            <input
                                type="text"
                                id="lastName"
                                className="form-control form-control-lg"
                                placeholder=""
                            />
                            <label className="form-label" htmlFor="lastName">
                                Otp
                            </label>
                        </div>
                    }



                    {checkVerifyButtonText &&
                        <div className="mt-4 pt-2">

                            <div className='d-flex justify-content-between'>
                                <button type="button" className="btn btn-primary " onClick={VerifyOtp}>
                                    Verify Otp
                                </button>

                                <p small fw-bold mt-2 pt-1 mb-0><a href='#!'> Resend Otp</a></p>
                            </div>

                        </div>
                    }


                    {!checkVerifyButtonText &&
                        <div className="mt-4 pt-1">

                            <div className='text-center'>
                                <button type="button" className="btn btn-primary " onClick={SendOtpToPartner}>
                                    Send Otp
                                </button>

                            </div>
                            <p className=" text-center small fw-bold mt-2 pt-1 mb-0">
                                Already have an account? <a href="#!" className="link-danger"><Link to={"/login"}>Sign In</Link> </a>
                            </p>
                        </div>
                    }

                </form>
            }

            {
                isCheckEmailVArification &&
                <form>
                    <div className="text-center">
                        <h3 className="">Set your Password</h3>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">BS</p>
                    </div>

                    {/* First Name input */}
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder=""
                        />
                        <label className="form-label" htmlFor="firstName">
                            Password
                        </label>
                    </div>

                    {/* Last Name input */}
                    <div className="form-outline mb-4">
                        <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg"
                            placeholder=""
                        />
                        <label className="form-label" htmlFor="lastName">
                            Re-Enter Password
                        </label>
                    </div>



                    <div className="mt-4 pt-2 text-center">
                        <button type="button" className="btn btn-primary " onClick={saveUser}>
                            Save Password
                        </button>


                    </div>
                </form>
            }


        </div>





    )
}

export default Registration