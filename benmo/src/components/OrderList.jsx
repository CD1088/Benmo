import { React, useState, useEffect, useContext } from "react";
import TestA from "./TestA";
import { CustomersContext } from "../Customers.tsx";

//const OrderContext = createContext();

const OrderList = () => {
  const [guestOrder, setGuestOrder] = useState([]);
  const [itemSum, setItemSum] = useState([
    { name: "fries", price: 2.0, isClicked: false },
    { name: "pizza", price: 3.0, isClicked: false },
    { name: "soda", price: 1.0, isClicked: false },
  ]);
  const { foodOrder, setFoodOrder } = useContext(CustomersContext);

  useEffect(() => {
    if (foodOrder) {
      const updatedOrder = { ...foodOrder, foods: guestOrder };
      setFoodOrder(updatedOrder); // Assuming setGuest will update the guest in context
    }
    console.log(foodOrder);
  }, [guestOrder, foodOrder, setFoodOrder]);

  //console.log(itemSum);
  const handleClick = (fItem) => {
    const updatedItemSum = itemSum.map((item) =>
      item.name === fItem.name ? { ...item, isClicked: !item.isClicked } : item
    );
    setItemSum(updatedItemSum);

    if (!fItem.isClicked) {
      setGuestOrder([...guestOrder, fItem]);
    } else {
      setGuestOrder(guestOrder.filter((item) => item.name !== fItem.name));
    }
  };

  return (
    <div>
      <ul>
        {itemSum.map((item, itemIndex) => (
          <div
            className="foodItem"
            key={itemIndex}
            onClick={() => {
              handleClick(item);
            }}
          >
            <TestA foodItem={item} />
          </div>
        ))}
      </ul>
      {console.log(guestOrder)}
    </div>
  );
};

export default OrderList;
