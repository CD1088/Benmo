import React from "react";
import styles from "./TotalCheckPage.module.css";

const CheckoutSummary = () => {
  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.checkoutTitle}>check out</h2>
      <p className={styles.foodPriceTotal}>food price</p>
      <p className={styles.taxAmount}>tax</p>
      <p className={styles.totalAmount}>total</p>

      <div className={styles.buttonContainer}>
        <button className={styles.payButton}>Pay</button>
        <button className={styles.groupPayButton}>Group Pay</button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
