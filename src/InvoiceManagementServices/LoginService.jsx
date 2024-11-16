import axios from "axios";

const API_URL = "http://localhost:8082/";

export const LoginCustomer = async (loginData) => {
    try {
       const response = await axios.post(`${API_URL}login`, loginData);
      //  alert("test"+JSON.stringify(response))
       return { success: response.status, data: response.data };
    } catch (error) {   
       console.error("Login error:", error);
       // Return a custom error object instead of throwing an error
       return { success: false, message: "Invalid credentials or email not verified." };
    }
 };


 export const SendOtp =async(email)=>{
    try {
        const response = await axios.post(`${API_URL}sendOtp?email=${email}`);
       //  alert("test"+JSON.stringify(response))
        return { success: response.status, data: response.data };
     } catch (error) {   
        console.error("Login error:", error);
        // Return a custom error object instead of throwing an error
        return { success: false, message: "otp not recieved." };
     }
 }

 
 export const VerifyEmailOtp =async(emailOtp)=>{
    try {
        const response = await axios.post(`${API_URL}verifyOtp`,emailOtp);
       //  alert("test"+JSON.stringify(response))
        return { success: response.status, data: response.data };
     } catch (error) {   
        console.error("Login error:", error);
        // Return a custom error object instead of throwing an error
        return { success: false, message: "otp not recieved." };
     }
 }

 export const SaveUser=async(Customer)=>{
    try {
        const response = await axios.put(`${API_URL}signup`,Customer);
       //  alert("test"+JSON.stringify(response))
        return { success: response.status, data: response.data };
     } catch (error) {   
        console.error("Login error:", error);
        // Return a custom error object instead of throwing an error
        return { success: false, message: "otp not recieved." };
     }
 }


 export const ForgotOtp=async(email)=>{
    try {
        const response = await axios.post(`${API_URL}sendForgotOtp?email=${email}`);
       // const response = await axios.post(`http://localhost:8082/sendForgotOtp?email=adesh.waykar@letratech.com`);

       //  alert("test"+JSON.stringify(response))
        return { success: response.status, data: response.data };
     } catch (error) {   
        console.error("Login error:", error);
        // Return a custom error object instead of throwing an error
        return { success: false, message: "otp not recieved." };
     }
 }
 
