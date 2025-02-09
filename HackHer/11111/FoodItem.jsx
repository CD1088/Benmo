import React from "react";
import styles from "./TotalCheckPage.module.css";

const FoodItem = ({ image, name, info, price }) => {
  return (
    <article className={styles.foodItem}>
      <div className={styles.imageWrapper}>
        <img
          loading="lazy"
          src={image}
          alt={name}
          className={styles.foodImage}
        />
      </div>
      <div className={styles.foodDetails}>
        <h2 className={styles.foodName}>{name}</h2>
        <p className={styles.foodInfo}>{info}</p>
      </div>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>{price}</p>
      </div>
    </article>
  );
};

export default FoodItem;
