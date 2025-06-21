import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import ProductForm from "./components/product/productForm/ProductForm";
import ProductList from "./components/product/productList/ProductList";

function App() {
  const exampleProduct = {
    id: 1,
    name: "Sample Product",
    price: 99.99,
  };
  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route
              path="/product-form"
              element={<ProductForm product={exampleProduct} />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
