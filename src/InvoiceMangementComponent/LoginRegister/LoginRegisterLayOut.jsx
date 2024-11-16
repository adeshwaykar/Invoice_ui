import React from 'react'
import Login from './Login'
import Registration from './Registration'
import { useLocation } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'

const LoginRegisterLayOut = () => {
    
    const location=useLocation();
  return (
    <div>
        
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          {location.pathname === '/login' && <Login />}
              {location.pathname === '/register' && <Registration />}
              {location.pathname==="/fogotPassword" && <ForgotPassword/>}
        
        </div>
      </div>
     
    </section>
  


        </div>
  )
}

export default LoginRegisterLayOut