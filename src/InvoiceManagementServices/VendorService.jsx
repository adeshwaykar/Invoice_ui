import axios from "axios";
const API_URL = "http://localhost:8082/"; // No extra slashes

export const SaveVendor = async (vendor) => {
    try {
        const response = await axios.post(
            `${API_URL}vendors/save`, 
            vendor, 
            {
                headers: { 
                    'customer_id': localStorage.getItem("customerId") // Ensure customer_id is correct
                }
            }
        );
        

        return { success: response.status === 200, data: response.data };
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: error.response ? error.response.data : "Something went wrong." };
    }
};


export const getVendorByCustomerId = async (type) => {
    try {
        const response = await axios.get(
            `${API_URL}vendors/all?type=${type}`, 
            
            {
                headers: { 
                    'customer_id': localStorage.getItem("customerId") // Ensure customer_id is correct
                }
            }
        );
        

        return { success: response.status === 200, data: response.data };
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: error.response ? error.response.data : "Something went wrong." };
    }
};


export const deleteVendorById = async (uniqueId) => {
    try {
        const response = await axios.delete(
            `${API_URL}vendors/${uniqueId}`, 
            
            {
                headers: { 
                    'customer_id': localStorage.getItem("customerId") // Ensure customer_id is correct
                }
            }
        );
        

        return { success: response.status === 200, data: response.data };
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: error.response ? error.response.data : "Something went wrong." };
    }
};


export const getVendorById = async (uniqueId) => {
    try {
        const response = await axios.get(
            `${API_URL}vendors/${uniqueId}`, 
            
            {
                headers: { 
                    'customer_id': localStorage.getItem("customerId") // Ensure customer_id is correct
                }
            }
        );
        

        return { success: response.status === 200, data: response.data };
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: error.response ? error.response.data : "Something went wrong." };
    }
};


export const updateVendorById = async (uniqueId,vendorData) => {
    try {
        const response = await axios.put(
            `${API_URL}vendors/${uniqueId}`, vendorData,
            
            {
                headers: { 
                    'customer_id': localStorage.getItem("customerId") // Ensure customer_id is correct
                }
            }
        );
        

        return { success: response.status === 200, data: response.data };
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: error.response ? error.response.data : "Something went wrong." };
    }
};


