import React, { FC } from "react";

// Define types for customer data
export interface CustomerData {
  id: string;
  isActive: boolean;
  foods: { name: string; price: number }[];
  total: number;
}

// Customer component to render individual customer
const Customer: FC<{
  customer: CustomerData;
  onClick: () => void;
  onRemove: () => void;
}> = ({ customer, onClick, onRemove }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        backgroundColor: customer.isActive ? "lightgreen" : "white",
      }}
    >
      <h3>{customer.id}</h3>
      <p>Status: {customer.isActive ? "Active" : "Inactive"}</p>
      <p>Foods: {customer.foods.map((food) => food.name).join(", ")}</p>
      <p>Total: {customer.total}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        -
      </button>
    </div>
  );
};

export default Customer;
