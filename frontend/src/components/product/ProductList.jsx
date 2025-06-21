import { useEffect, useState } from "react";
import { getProducts } from "../../service/product-api";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
    }
    fetchProducts();
  }, []);

  return (
    <TableContainer>
      <Box display="flex" justifyContent="flex-start">
        <Button variant="contained" onClick={handleClickOpen}>
          {" "}
          Add New
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
      <hr></hr>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }} scope="col">
              #
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} scope="col">
              Product Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} scope="col">
              Description
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} scope="col">
              Category
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} scope="col">
              Date Added
            </TableCell>
            <TableCell scope="col"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProducts !== null ? (
            filteredProducts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product, index) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ fontSize: "1.1rem" }} scope="row">
                    {page * rowsPerPage + index + 1}
                  </TableCell>

                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    <Link to={`/product`} state={{ currentProduct: product }}>
                      {product.title}
                    </Link>
                  </TableCell>

                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {product.summary}
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {product.category ? product.category.title : ""}
                  </TableCell>
                  <TableCell sx={{ fontSize: "1.1rem" }}>
                    {new Date(product.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="secondary"
                      onClick={() => handleConfirmOpen(product.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleClickOpenEdit(product)}
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
   
    </TableContainer>
  );
};
