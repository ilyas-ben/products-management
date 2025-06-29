import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct, getProducts } from "../../../service/product-api";
import Modal from "../../shared/Modal";
import Toast from "../../shared/Toast";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterText, setFilterText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
    }
    fetchProducts();
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterText(value);
    setPage(0);
  };

  const handleClickOnDeleteIcon = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteProduct = async (id) => {
    const result = await deleteProduct(id);
    if (result?.error) {
      setToast({ open: true, message: result.error, severity: "error" });
    } else {
      setToast({
        open: true,
        message: "Product deleted successfully!",
        severity: "success",
      });
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      handleDeleteProduct(selectedProductId);
    }
    handleCloseModal();
  };

  const navigate = useNavigate();
  const handleClickOnEditIcon = (product) => {
    navigate("/product-form", { state: { product } });
  };

  return (
    <TableContainer>
      <Box display="flex" justifyContent="flex-start">
        <Button variant="contained">
          <Link to="/product-form" className="addButton">
            New Product
          </Link>
        </Button>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <TextField
          label="Search Products"
          variant="outlined"
          value={filterText}
          onChange={handleFilterChange}
        ></TextField>
      </Box>

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }} scope="col">
              Product Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} scope="col">
              Price
            </TableCell>

            <TableCell sx={{ fontWeight: "bold" }} align="center" scope="col">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products !== null ? (
            products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product, index) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {product.name}
                  </TableCell>

                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {product.price}
                  </TableCell>

                  <TableCell align="center">
                    <IconButton
                      color="secondary"
                      onClick={() => handleClickOnDeleteIcon(product.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleClickOnEditIcon(product)}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell>Loading... </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={handleCloseModal}
        onConfirm={handleConfirmDelete}
        title="Delete Product?"
        contentText="Are you sure you want to delete this product?"
        confirmText="Yes"
        cancelText="No"
      />
      <Toast
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
        onClose={() => setToast({ ...toast, open: false })}
      />
    </TableContainer>
  );
};

export default ProductList;
