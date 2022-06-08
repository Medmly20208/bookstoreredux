import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const content = useSelector((state) => state.cartreducer.content);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {content.map((ele) => {
          return (
            <CartItem
              item={{
                title: ele[0],
                quantity: ele[3],
                total: ele[3] * ele[1],
                price: ele[1],
              }}
            ></CartItem>
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
