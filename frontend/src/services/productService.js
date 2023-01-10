import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products`;
const token = localStorage.getItem("token");
console.log(token);

// Create new product
let config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: "Bearer " + token,
  },
};
const createProduct = async (formData) => {
  console.log(token, "token");
  console.log("payload", formData);
  const response = await axios.post(API_URL, formData, config);
  return response.data;
};

const productService = {
  createProduct,
};

export default productService;
