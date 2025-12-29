import Cart from "../Cart";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";

it("Should load Cart component", () => {
  render(
    <Provider store={AppStore}>
      <Cart />
    </Provider>
  );

  const heading = screen.getByRole("heading", { name: "Cart" });

  expect(heading).toBeInTheDocument();
});
