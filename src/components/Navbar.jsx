import {Link} from "react-router";

const Navbar = ({setIsLoggedIn, isLoggedIn}) => {
  return (
    <ul className="navbar">
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
        <Link to="/cart">Cart</Link>
      </li>
       <li>
            <button className="login" onClick={()=> setIsLoggedIn(!isLoggedIn)}>{isLoggedIn? "Logout": "Login"}</button>
        </li>
    </ul>
  );
};

export default Navbar;
