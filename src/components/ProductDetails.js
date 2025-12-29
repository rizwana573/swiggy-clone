import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useProductDetailsData from "../utils/useProductDetailsData"

const ProductDetails = () => {
  const { productId } = useParams();
  const productInfo = useProductDetailsData(productId);
  
  if (productInfo === null) {
    return (
      <div className="card-container">
        {Array.from({ length: 15 }).map((_, i) => (
          <Shimmer key={i} />
        ))}
      </div>
    );
  }

  const {
    title,
    category,
    image,
    description,
    rating
    } = productInfo;

  return (
    <>
      <div className="productDetailPage">
        <h1 className="productName">{title}</h1>
        <img className="productImg" src={image} />
        <p className="category">
          <b>Category:</b> {category}
        </p>
        <p>
          <b>Rating: </b>
          {rating.rate}
        </p>
        <p className="instructions">
          <b>description:</b> {description}
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
