"use client";

import React from "react";
import styles from "./TotalCheckPage.module.css";
import FoodItem from "./FoodItem";
import CheckoutSummary from "./CheckoutSummary";

const TotalCheckPage = () => {
  const foodItems = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
      name: "Food Name",
      info: "Food Info",
      price: "$ price",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
      name: "Food Name",
      info: "Food Info",
      price: "$ price",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
      name: "Food Name",
      info: "Food Info",
      price: "$ price",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
      name: "Food Name",
      info: "Food Info",
      price: "$ price",
    },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <section className={styles.orderSection}>
          <h1 className={styles.pageTitle}>Total Check</h1>

          <div className={styles.foodList}>
            {foodItems.map((item) => (
              <FoodItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        <aside className={styles.checkoutSection}>
          <CheckoutSummary />
        </aside>
      </div>
    </main>
  );
};

export default TotalCheckPage;
