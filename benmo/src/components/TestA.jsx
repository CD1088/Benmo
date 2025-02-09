import React from "react";

const TestA = ({ foodItem }) => {
  return <div>{foodItem.name + ", " + foodItem.price}</div>;
};

export default TestA;
