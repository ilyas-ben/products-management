import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/product/ProductDetails";
import { ProductList } from "./components/product/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
