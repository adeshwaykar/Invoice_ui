import { useEffect, useState } from "react"
import CreateInvoice from "./CreateInvoice"
import Product from "../../Product/Product"
import { getVendorByCustomerId } from "../../../InvoiceManagementServices/VendorService"
import { GetAllProducts } from "../../../InvoiceManagementServices/ProductService"

const CreateInvoiceComponent = () => {
    const [clientData, setClientData] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const [optionProduct, setOptionProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);


    useEffect(() => {

        const getInvoiceNeccessaryData = async () => {
            await handleClientList();

            await handleProductList();

        }
        getInvoiceNeccessaryData();
    }, [])

    const handleClientList = async () => {
        const data = await getVendorByCustomerId("Client");

        if (data) {
            let clients = data.data;
            if (clients.length > 0) {
                const options = [];
                clients.map((client, index) => {
                    options.push({ value: client.vendorClientUniqueId, label: client.companyName })
                })
                options.push({ value: "createClient", label: "+Add New Client" })
                setClientData(options)

            }
            console.log("createClient  ",data.data);
        }
    }

    const handleProductList = async () => {
        // const data = await getVendorByCustomerId("");
        const data = await GetAllProducts();
        if (data.success) {
            let products = data.data;
            if (products.length > 0) {
                const options = [];
                products.map((product, index) => {
                    options.push({ value: product.itemId, label: product.itemName })
                })
                options.push({ value: "createProduct", label: "+Add New Product" })
                setOptionProduct(options)
               setAllProducts(data.data);
            }
            console.log(data.data);
        }
    }

    const handleClickProduct=(product)=>{
      console.log("product",selectedProduct,product)
      const selectedProducts=selectedProduct.length?selectedProduct:[];
         selectedProducts.push(allProducts.find(x=>x.itemId===product.value))
      setSelectedProduct(selectedProducts)
    }
    return (
        <>
            <CreateInvoice clientData={clientData} optionProduct={optionProduct}  handleClickProduct={handleClickProduct} selectedProduct={selectedProduct}/>
        </>
    )
}

export default CreateInvoiceComponent