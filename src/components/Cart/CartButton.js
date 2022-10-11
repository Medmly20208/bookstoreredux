import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showaction } from "../../store/Uislice";

const CartButton = (props) => {
  const disp = useDispatch();
  const content = useSelector((state) => state.cartreducer.content.length);
  const displayshophandler = () => {
    disp(showaction.showcart());
  };
  return (
    <button className={classes.button} onClick={displayshophandler}>
      <span>Cart</span>
      <span className={classes.badge}>{content}</span>
    </button>
  );
};

export default CartButton;
