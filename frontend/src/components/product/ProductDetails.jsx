import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../service/product-api";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(await getProduct(id));
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>
        <strong>Price:</strong> MAD{product.price}
      </p>
    </div>
  );
};

export default ProductDetails;
