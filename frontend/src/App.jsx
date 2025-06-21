import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import ProductForm from "./components/product/productForm/ProductForm";
import { ProductList } from "./components/product/productList/ProductList";

function App() {
  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product-form" element={<ProductForm />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
