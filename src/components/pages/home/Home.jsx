import React from "react";
import Hero from "./hero/Hero";
import ProductList from "./product-list/ProductList";
import Button from "../../../ui/button/Button";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductList />
      <Button name="View All Products" />
    </div>
  );
};

export default Home;
