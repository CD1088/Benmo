import './App.css';
import React, { useState, createContext } from 'react';
import Customers from './Customers.tsx';
import OrderList from './components/OrderList';
import { CustomersContext } from './Customers.tsx';

// Create a Context for the guestOrder
export const GuestOrderContext = createContext();

function App() {
  const [guestOrder, setGuestOrder] = useState([]);
  const [customers, setCustomers] = useState([
    { id: '1', isActive: true, foods: [], total: 0 },
    { id: '2', isActive: false, foods: [], total: 0 },
    { id: '3', isActive: false, foods: [], total: 0 },
  ]);

  return (
    <GuestOrderContext.Provider value={{ guestOrder, setGuestOrder }}>
      <CustomersContext.Provider value={{ customers, setCustomers }}>
        <div>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <OrderList />
            <Customers guestOrder={guestOrder} />
          </div>
        </div>
      </CustomersContext.Provider>
    </GuestOrderContext.Provider>
  );
}

export default App;
