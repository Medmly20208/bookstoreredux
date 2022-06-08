//import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { showaction } from "../src/store/Uislice";
import React, { Suspense } from "react";
const Cart = React.lazy(() => import("./components/Cart/Cart"));
let isInitial = true;
let color;
function App() {
  const disp = useDispatch();
  const displaycart = useSelector((state) => state.showCart.show);
  const cart = useSelector((state) => state.cartreducer);
  const dispnotif = useSelector(
    (state) => state.showCart.notification.shownotification
  );
  const msg = useSelector((state) => state.showCart.notification.message);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const senddata = async () => {
      disp(showaction.shownotification({ message: "loading" }));
      color = "blue";
      const reps = await fetch(
        "https://bookproject-e6125-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({ items: cart.content }),
          headers: { "content-type": "application/json" },
        }
      );
      if (!reps.ok) {
        throw new Error("something went wrong");
      }

      disp(showaction.shownotification({ message: "sent successfully" }));
      color = "#66CC66";
    };
    senddata().catch((e) => {
      color = "red";
      disp(showaction.shownotification({ message: e.message }));
    });
  }, [cart]);

  return (
    <React.Fragment>
      {dispnotif && <Notification title={msg} cls={color}></Notification>}

      <Layout>
        {displaycart && (
          <Suspense fallback={<p>it's loading</p>}>
            <Cart />
          </Suspense>
        )}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
