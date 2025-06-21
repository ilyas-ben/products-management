import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { saveProduct } from "../../../service/product-api";
import "./ProductForm.css";
import Toast from "../../shared/Toast";

const ProductForm = (props) => {
  ProductForm.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

  const [product, setProduct] = useState({});
  const [toast, setToast] = useState({});

  useEffect(() => {
    if (props.product) {
      setProduct(props.product);
    }
  }, [props.product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await saveProduct(product);
    if (result?.error) {
      setToast({ open: true, message: result.error, severity: "error" });
    } else {
      setToast({
        open: true,
        message: "Product saved successfully!",
        severity: "success",
      });
    }
  };

  return (
    <Grid container component="div" className="product-form-container">
      <Grid item className="product-form-header">
        <Box sx={{ fontSize: "32px" }}> New Product</Box>
      </Grid>
      <form onSubmit={handleSubmit} className="product-form">
        <Box item xs={6} component="div" className="product-form-input">
          <TextField
            required
            id="product-name"
            name="name"
            label="Name"
            variant="standard"
            value={product.name || ""}
            onChange={handleInputChange}
            fullWidth
          />
        </Box>
        <Box
          xs={6}
          component="div"
          className="product-form-input"
          sx={{ width: "100%" }}
        >
          <TextField
            label="Price"
            id="product-price"
            name="price"
            variant="standard"
            type="number"
            value={product.price || ""}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Box>
        <Box className="submit-button-container">
          <Button type="submit" variant="contained" color="success">
            Save Product
          </Button>
        </Box>
      </form>
      <Toast
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
        onClose={() => setToast({ ...toast, open: false })}
      />
    </Grid>
  );
};

export default ProductForm;
