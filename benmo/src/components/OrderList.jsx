import React, { useState, useEffect, useContext, useRef } from 'react';
import TestA from './TestA';
import { CustomersContext } from '../Customers.tsx';
import { GuestOrderContext } from '../App';

const OrderList = () => {
  const { guestOrder, setGuestOrder } = useContext(GuestOrderContext);
  const [itemSum, setItemSum] = useState([
    { name: 'fries', price: 2.0, isClicked: false },
    { name: 'pizza', price: 3.0, isClicked: false },
    { name: 'soda', price: 1.0, isClicked: false },
  ]);

  const context = useContext(CustomersContext);
  if (!context) {
    throw new Error('CustomersContext must be used within a CustomersContext.Provider');
  }
  const { customers, setCustomers } = context;

  const prevGuestOrderRef = useRef(guestOrder);

  useEffect(() => {
    const prevGuestOrder = prevGuestOrderRef.current;
    if (prevGuestOrder !== guestOrder) {
      const activeCustomer = customers.find((customer) => customer.isActive);
      if (activeCustomer) {
        const updatedCustomer = { ...activeCustomer, foods: guestOrder };
        setCustomers(
          customers.map((customer) =>
            customer.id === activeCustomer.id ? updatedCustomer : customer
          )
        );
      }
      prevGuestOrderRef.current = guestOrder;
    }
  }, [guestOrder, customers, setCustomers]);

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
    </div>
  );
};

export default OrderList;
