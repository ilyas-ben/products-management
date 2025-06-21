import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/product/ProductDetails";
import { ProductList } from "./components/product/ProductList";
import { Header } from "./components/header/Header";
import { Container } from "@mui/material";
import ProductForm from "./components/product/productForm/ProductForm";

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
