import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const displaycart = useSelector((state) => state.showCart.show);

  return (
    <React.Fragment>
      <Layout>
        {displaycart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
