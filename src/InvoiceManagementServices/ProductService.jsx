import axios from "axios";

const API_URL = "http://localhost:8082/"; // No extra slashes

export const SaveProduct = async (product) => {
    try {
        const response = await axios.post(
            `${API_URL}items/createItem`, 
            product, 
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



export const GetAllProducts = async () => {
    try {
        const response = await axios.get(
            `${API_URL}items/all`, 
        
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



export const GetProductByProductId = async (itemId) => {
    try {
        const response = await axios.get(
            `${API_URL}items/item/${itemId}`, 
        
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

  
 

export const UpdateProductByProductId = async (itemId,product) => {
    try {
        const response = await axios.patch(
            `${API_URL}items/item/${itemId}`, product,
        
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




export const DeleteProductByProductId = async (itemId) => {
    try {
        const response = await axios.delete(
            `${API_URL}items/item/${itemId}`, 
        
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