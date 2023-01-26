import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Rich Dad Poor Dad"
          price={6}
          description="change your financial life"
        />
        {/*
          <ProductItem
          title="can't hurt me "
          price={6}
          description="develop your discipline"
        />
        <ProductItem
          title="make friends and influence people"
          price={44}
          description="take your social life to next level"
        />
          */}
      </ul>
    </section>
  );
};

export default Products;
