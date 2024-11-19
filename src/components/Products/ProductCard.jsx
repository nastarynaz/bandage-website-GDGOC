import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

import { getImageUrl } from "../../../utils";

export const ProductCard = ({ productData }) => {
  const { product, description, oldPrice, newPrice, imageSrc } = productData;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${product}`}
        className={styles.image}
      />
      <div className={styles.brief}>
        <h3 className={styles.product}>{product}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>
          <p className={styles.oldPrice}>{oldPrice}</p>
          <p className={styles.newPrice}>{newPrice}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.shape({
    product: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    oldPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
};
