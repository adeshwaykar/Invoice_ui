import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"
import { LoginRegisterContext } from '../../InvoiceManagementContext/LoginRegisterContext';
const Login = () => {
  const { LoginUser } = useContext(LoginRegisterContext); // Use useContext here
  const[email,setEmail]=useState();
  const[pasword,setPassword]=useState();
  const[error,setError]=useState();

//"customer6@example.com"  password123
    const CheckLoginIdAndPassword =async (e) => {
      e.preventDefault();
      const response={
        email:email,
        password:pasword
      }
     const loginOrNot=await LoginUser(response);
     // alert(loginOrNot)
     if(!loginOrNot){
      setError("Invalid Email or Password");
     }
   };

  //  useEffect(()=>{  
   
   
  //  },[])

    return (
        
        
    
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 form-start p-5">
            {error &&
            <>
             <div className='text errorCode'>
              invalid credential
             </div>
            </>
            }
            <form onSubmit={(e)=>CheckLoginIdAndPassword(e)}>
              <div className="text-center ">
                <h3 className=" ">Sign in</h3>
                {/* <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button> */}
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">BS</p>
              </div>

              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder=""
                  onChange={(e)=>{setEmail(e.target.value); setError()}}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder=""
                  onChange={(e)=>{setPassword(e.target.value) ;setError()}}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
               
                  <Link to={"/fogotPassword"}  className="text-body">  Forgot password?</Link>
                 
                
              </div>

              <div className="text-center  mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <a href="#!" className="link-danger">
                    <Link to={"/register"}> Register</Link>
                   
                  </a>
                </p>
              </div>
            </form>
          </div>
       
  


       
    );
};

export default Login;
