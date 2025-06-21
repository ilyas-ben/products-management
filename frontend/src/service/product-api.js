import axios from "axios";

const BASE_URL = "http://localhost:8080/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return { error: error.response ? error.response.data : error.message };
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.response ? error.response.data : error.message };
  }
};

export const saveProduct = async (product) => {
  try {
    const response = await axios.post(BASE_URL, product);
    return response.data;
  } catch (error) {
    return { error: error.response ? error.response.data : error.message };
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.response ? error.response.data : error.message };
  }
};
