import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem title="Test1" price={6} description="description test1!" />
        <ProductItem title="Test2" price={6} description="description test2!" />
        <ProductItem title="Test3" price={44} description="description test3" />
      </ul>
    </section>
  );
};

export default Products;
