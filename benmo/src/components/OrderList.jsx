import { React, useState, useEffect, useContext } from "react";
//import TestA from "./TestA.jsx";

//const OrderContext = createContext();

const OrderList = (item) => {
  const [guestOrder, setGuestOrder] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [itemSum, setItemSum] = useState([
    { name: "fries", price: 2.0, isClicked },
    { name: "pizza", price: 3.0, isClicked },
    { name: "soda", price: 1.0, isClicked },
  ]);
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
