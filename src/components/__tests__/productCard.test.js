import { render, screen } from "@testing-library/react";
import ProductCard,  { jeweleryProduct } from "../ProductCard";
import MOCK_DATA from "../mocks/mockData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { MemoryRouter } from "react-router";

it("Should render Product Card", () => {
  render(
    <MemoryRouter>
      <Provider store={AppStore}>
        <ProductCard productData={MOCK_DATA.products[0]} />
      </Provider>
    </MemoryRouter>
  );
  const name = screen.getByText(/Fjallraven - Foldsack No\. 1 Ba/i  );

  expect(name).toBeInTheDocument();
});

it("Should render Products with Promoted Label", () => {
    const JeweleryProductCard = jeweleryProduct(ProductCard);
    render(
        <MemoryRouter>
            <Provider store={AppStore}>
                <JeweleryProductCard productData = {MOCK_DATA.products[1]}/>
            </Provider>
        </MemoryRouter>
    )
     const label = screen.getByText("Jewelery");
  expect(label).toBeInTheDocument();
})
