import ProductCard, {jeweleryProduct} from "./ProductCard";
import Shimmer from "./Shimmer";


const ProductsContainer = ({ productData, isLoading }) => {
  const IndianDish = jeweleryProduct(ProductCard);

  if (isLoading) {
    return (
      <div className="card-container">
        {Array.from({ length: 15 }).map((_, i) => (
          <Shimmer key={i} />
        ))}
      </div>
    );
  }
  if (!isLoading && productData.length === 0) {
    return <div className="noResults">
    <h2 className="">No products found with your search results!</h2>
    </div>;
  }

  return (
    <ul className="card-container">
      {productData.map((product) => (
        <li key={product?.id}  data-testid="card-container">
          {product.category.toLowerCase()==="jewelery"? <IndianDish productData={product}/>: <ProductCard  productData={product} />}
          </li>
      ))}
    </ul>
  );
};

export default ProductsContainer;
