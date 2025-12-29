import { useDispatch } from 'react-redux';
import {addItem} from "../utils/CartSlice";
import {Link} from "react-router";

const ProductCard = ({productData}) => {
   const {image, title, category, rating, price, id} = productData;
   const trimmedTitle = (title, maxLength) => {
     return title.length > maxLength ? title.slice(0, maxLength) + "..." : title
   }
   const dispatch = useDispatch();
   const handleAddToCart = (item) => {
     dispatch(addItem(item));
   }
return (
    <div className="card">
       <img src={image}></img>
       <div className="resDetails">
        <Link className="productName" to={`/products/${id}`}>{trimmedTitle(title, 30)}</Link>
        <div className="category">Category: {category}</div>
        <div className="avgRating">Rating: {rating.rate}⭐</div>
        <div className="ratingCount">{rating.count}+ Reviews</div>
        <div className="Price">Price: ${price}</div>
        <button className="addToCart" data-testid="addToCart" onClick={() => handleAddToCart(productData)}>Add to cart</button>
       </div>
    </div>
)
}

export const jeweleryProduct = (ProductCard) =>{
   return ((props) => {
      return (
         <>
         <div className="jeweleryProduct">Jewelery</div>
         <ProductCard {...props}/>
         </>
      )
   })
}

export default ProductCard;