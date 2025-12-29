import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { useState } from "react";

it("Should render Navbar component", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const homeText = screen.getByText("Home");
  expect(homeText).toBeInTheDocument();
});
it("Should render cart items", () => {
      render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/cart/i);
  expect(cartItems).toBeInTheDocument();
})
it("Should render Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});
const NavBarWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Provider>
    </BrowserRouter>
  );
};
it("Should change login button text to logout on click", () => {
  render(<NavBarWrapper />);
  const loginButton = screen.getByRole("button", { name: /login/i });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: /logout/i });
  expect(logoutButton).toBeInTheDocument();
});
