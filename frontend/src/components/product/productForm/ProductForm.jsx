import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { saveProduct } from "../../../service/product-api";
import Toast from "../../shared/Toast";
import "./ProductForm.css";

const ProductForm = () => {
  ProductForm.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

  const { state } = useLocation();
  const [product, setProduct] = useState({});
  const [toast, setToast] = useState({});

  useEffect(() => {
    if (state?.product) {
      setProduct(state?.product);
    }
  }, []);

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
    <Card container component="div" className="product-form-container">
      <Grid item className="product-form-header">
        <Typography variant="h4">
          {state?.product ? ` ${state?.product.name}` : "New Product"}
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit} className="product-form">
        <Grid item component="div" className="product-form-input">
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
        </Grid>
        <Grid item component="div" className="product-form-input">
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
        </Grid>
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
    </Card>
  );
};

export default ProductForm;
