import { Link } from "react-router";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Navbar = ({ setIsLoggedIn, isLoggedIn, isOnline }) => {
  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);
  const cartItems = useSelector((state) => {
    return state.cart || [];
  });
  const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <ul className="navbar">
      <li>{isOnline ? "✅ Online" : "❌ Offline"}</li>
      <li>
        <button id="theme">Light</button>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
      <li>
        <Link data-testid="cartQuantity" to="/cart">Cart - {quantity}</Link>
      </li>
      <li>{isLoggedIn && <p>Hi {loggedInUser}</p>}</li>
      <li>
        <button className="login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
