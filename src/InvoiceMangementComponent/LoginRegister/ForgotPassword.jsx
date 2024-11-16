import React, { useContext, useState } from 'react'
import { LoginRegisterContext } from '../../InvoiceManagementContext/LoginRegisterContext';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from 'bootstrap';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const {  VerifyEmailThroughtEmail ,SaveCustomer,SendOtpToForgotCustomer} = useContext(LoginRegisterContext)
    const [error, setError] = useState();
    const [email, setEmail] = useState();
    const[password,setPassword]=useState();
    const[confirmPassword,setConfirmPassword]=useState();


    const [otp, setOtp] = useState();
    const navigate = useNavigate()
    const [checkVerifyButtonText, setCheckVerifyButtonText] = useState(false);

    const [isCheckEmailVArification, setIsCheckEmailVArification] = useState(false);

    const SendOtpToPartner = async () => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if(regex.test(email)){
        const ans = await SendOtpToForgotCustomer(email);
        if (ans==="email not exist") {
            setError( "user not found ")

        }else if(ans==="send email"){
            setCheckVerifyButtonText(true)

        } else {
            setError( "otp not send")
        }
    } else{
        setError( "plase enter valid email")

    }

    }

    const VerifyOtp = async () => {
        const emailObj = {
            email: email,
            otp: otp
        }
      const verify=  await VerifyEmailThroughtEmail(emailObj);
      if(verify){
        setError();
        setIsCheckEmailVArification(true)
      }else{
        setError("OTP not match")
      }

    }

    const saveUser = async() => {
     
        if(password===confirmPassword){
              const customer={
                customer_id:localStorage.getItem("customerId"),
                password:password
              }
          const status=  await SaveCustomer(customer);
          if(status){
            toast.success("password reset succefully plase login through it ");
            navigate("/login")
          }else{
            setError("something get Wrong")
          }

        }

    }

    return (



        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 form-start p-5">
            {error && 
             <div className='errorCode'>
              {error}
                </div>
             }
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
                            onChange={(e) => {setEmail(e.target.value);setError()}}
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
                                onChange={(e) => setOtp(e.target.value)}
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
                            onChange={(e)=>{setPassword(e.target.value)}}
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
                            onChange={(e)=>{setConfirmPassword(e.target.value);
                                if(password==setConfirmPassword){
                                    setError()
                                }else{
                                 setError("password not match");
                                }
                            }}

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

export default ForgotPassword