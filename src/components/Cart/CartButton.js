import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showaction } from "../../store/Uislice";
const CartButton = (props) => {
  const disp = useDispatch();
  const conte = useSelector((state) => state.cartreducer.content.length);
  const displayshophandler = () => {
    disp(showaction.showcart());
  };
  return (
    <button className={classes.button} onClick={displayshophandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{conte}</span>
    </button>
  );
};

export default CartButton;
