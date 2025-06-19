import { useEffect, useState } from "react";
import { getProducts } from "../../service/product-api";

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
    <>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <a href={`/product/${product.id}`}>{product.name}</a>
              </td>
              <td>MAD{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
