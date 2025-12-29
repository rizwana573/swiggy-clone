import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../utils/CartSlice";
import { Link } from "react-router";

const Cart = ({}) => {
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const dispatch = useDispatch();
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };
  //    if (cartItems.length === 0) {
  //     return <h2>No items in your cart</h2>;
  //   }
  return (
    <>
      <h1 className="cartTitle"> Cart </h1>
      {cartItems.length === 0 ? (
        <h2>No items in your cart</h2>
      ) : (
        <>
        <ul className="card-container">
          {cartItems.map((item) => (
            <li key={item.id} data-testid="cartItem">
              <div className="card">
                <img src={item.image}></img>
                <div className="resDetails">
                  <Link className="productName" to={`/products/${item.id}`}>
                    {item.title}
                  </Link>
                  <div className="Price">Price: ${item.price}</div>
                  <div className="quantity">{item.quantity}</div>
                  <button className="removeItem" onClick={() => handleRemoveItem(item.id)}>
                    Remove Item
                  </button>
                 
                </div>
              </div>
            </li>
          ))}
        </ul>
         <div>Total Price: ${totalPrice.toFixed(2)}</div>
        </>
      )}
    </>
  );
};

export default Cart;
