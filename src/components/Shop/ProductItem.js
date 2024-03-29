import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Cartactions } from "../../store/Cartslice";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const addtcart = useDispatch();
  const c = useSelector((state) => state);
  const AddtoCartHandeler = () => {
    addtcart(Cartactions.addtocart({ name: title, description, price }));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={AddtoCartHandeler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
