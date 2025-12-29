import { screen, render, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppLayout from "../../AppLayout";
import App from "../../App";
import Cart from "../Cart";
import { createMemoryRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import MOCK_DATA from "../mocks/mockProdList.json";

jest.mock("../Header", () => {
  const React = require("react");
  const Navbar = require("../Navbar").default; // import inside factory
  return {
    __esModule: true,
    default: (props) => (
      <header>
        <h1 data-testid="mock-logo">Mock Logo</h1>
        <Navbar {...props} />
      </header>
    ),
  };
});


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

const router = createMemoryRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

describe("Home page Test Cases", () => {
  it("Should render App Layout component", async () => {
    await act(async () => {
      render(
        <Provider store={AppStore}>
          <RouterProvider router={router}>
            <AppLayout />
          </RouterProvider>
        </Provider>
      );
    });

    const cards = await screen.getAllByTestId("card-container");
    expect(cards).toHaveLength(20);
  });

  it("Should show top rated products", async () => {
    await act(async () => {
      render(
        <Provider store={AppStore}>
          <RouterProvider router={router}>
            <AppLayout />
          </RouterProvider>
        </Provider>
      );
    });

    const topRatedBtn = await screen.getByTestId("topRatedBtn");
    expect(topRatedBtn).toBeInTheDocument();

    fireEvent.click(topRatedBtn);
    const topRatedProds = await screen.getAllByTestId("card-container");
    expect(topRatedProds).toHaveLength(6);
  });

  it("Should filter products", async () => {
    await act(() => {
      render(
        <Provider store={AppStore}>
          <RouterProvider router={router}>
            <AppLayout />
          </RouterProvider>
        </Provider>
      );
    });

    const searchBar = screen.getByTestId("searchBar");
    expect(searchBar).toBeInTheDocument();
    fireEvent.change(searchBar, { target: { value: "women" } });
    const searchedProducts = await screen.getAllByTestId("card-container");
    expect(searchedProducts.length).toBe(6);
  });
});

describe("Cart Functionality Test Cases", () => {
  it("Should add products to the cart", async () => {
    await act(() => {
      render(
        <Provider store={AppStore}>
          <RouterProvider router={router}>
            <AppLayout />
          </RouterProvider>
        </Provider>
      );
    });
    const addToCartBtns = await screen.getAllByTestId("addToCart");
    expect(addToCartBtns).toHaveLength(20);
    fireEvent.click(addToCartBtns[0]);
    fireEvent.click(addToCartBtns[1]);

    const cartQuantity = screen.getByTestId("cartQuantity");
    expect(cartQuantity.textContent).toBe("Cart - 2");

  });
});
