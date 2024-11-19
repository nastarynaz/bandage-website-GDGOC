import React from "react";
import products from "../../data/products.json";
import { ProductCard } from "./ProductCard";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>BESTSELLER PRODUCTS</h3>
      </div>
      <hr className={styles.divider} />
      <div className={styles.products}>
        {products.map((product, id) => {
          return <ProductCard key={id} productData={product} />;
        })}
      </div>
    </section>
  );
};
