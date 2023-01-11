import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products`;

const token = localStorage.getItem("token");
console.log("--token--", token);

// Create new product
let config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
};
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData, config);
  return response.data;
};
// Get all product

const getProducts = async () => {
  const token = await localStorage.getItem("token");
  let config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
};

export default productService;
