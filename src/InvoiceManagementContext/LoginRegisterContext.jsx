import React, { createContext, useEffect, useState } from 'react';
import { ForgotOtp, LoginCustomer, SaveUser, SendOtp, VerifyEmailOtp } from '../InvoiceManagementServices/LoginService';
import { useNavigate } from 'react-router-dom';

export const LoginRegisterContext = createContext();

export const LoginRegisterProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(undefined);
  const [customerid,setCustomerId]=useState()
  const navigate = useNavigate();
    
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("login") === "true";
    setLoginStatus(storedLoginStatus);
  }, []);

  const LoginUser=async(loginData)=>{ 
    
 const response= await LoginCustomer(loginData);
  

 if(response.success){
  setLoginStatus(true);

  localStorage.setItem("login",true)
  localStorage.setItem("userLevel",2);
  localStorage.setItem("customerId",response.data);
  
  navigate("/dashboard"); // Make sure the /dashboard route is defined in your routes configuration

 }else{
  
  
return response.success;

 }
    
 
  }

  const SendOtpToCustomer=async(email)=>{
    // Your function to send OTP to customer
      const response= await SendOtp(email);
       if(response.success){
          
        return response.data;
       }else{
        return false;
       }

  }

  const VerifyEmailThroughtEmail=async(emailObj)=>{
    // Your function to verify email through email
      
     const response=await VerifyEmailOtp(emailObj)
     if(response.success){
      localStorage.setItem("customerId",response.data);
      return true;
     }else{
      return false;
     }
  }

  const SaveCustomer=async(customer)=>{
    const response=await SaveUser(customer)
     if(response.success){

      localStorage.setItem("customerId",customer.customer_id);

      return true;
     }else{
      return false;
     }
  }




  const SendOtpToForgotCustomer=async(email)=>{
    // Your function to send OTP to customer
      const response= await ForgotOtp(email);

       if(response.success){
          
        return response.data;
       }else{
        return false;
       }

  }
  // If loginStatus is undefined, show loading or don't render children yet
  if (loginStatus === undefined) {
    return null;  // Or add a loading spinner here if you prefer
  }

  return (
    <LoginRegisterContext.Provider value={{ loginStatus, setLoginStatus,LoginUser,SendOtpToCustomer,VerifyEmailThroughtEmail,SaveCustomer ,SendOtpToForgotCustomer}}>
      {children}
    </LoginRegisterContext.Provider>
  );
};
