import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";
import { Provider } from "react-redux";
import store from "../../store/index";

test("add to cart working", () => {
  render(
    <Provider store={store}>
      <ProductItem
        title="make friends and influence people"
        price={44}
        description="take your social life to next level"
      />
    </Provider>
  );

  const btn = screen.getByRole("button");

  expect(btn).toHaveTextContent("Add To Cart");
});
