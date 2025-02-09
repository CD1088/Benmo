import React, { FC, createContext, useContext } from 'react';
import Customer, { CustomerData } from './Customer.tsx';
import useLocalStorage from './hooks/useLocalStorage.ts';
import { GuestOrderContext } from './App';

// Create a Context for the Customers
interface CustomersContextType {
  customers: CustomerData[];
  setCustomers: React.Dispatch<React.SetStateAction<CustomerData[]>>;
}

export const CustomersContext = createContext<CustomersContextType | undefined>(undefined);

const Customers: FC<{ guestOrder: any[] }> = ({ guestOrder: guestOrderProp }) => {
  const { guestOrder } = useContext(GuestOrderContext);
  const [customers, setCustomers] = useLocalStorage<CustomerData[]>('customers', [
    { id: '1', isActive: true, foods: [], total: 0 },
    { id: '2', isActive: false, foods: [], total: 0 },
    { id: '3', isActive: false, foods: [], total: 0 },
  ]);

  // Function to handle customer click
  const handleCustomerClick = (index: number) => {
    setCustomers(
      customers.map((customer, i) => ({
        ...customer,
        isActive: i === index,
      }))
    );
  };

  // Function to remove a customer
  const handleRemoveCustomer = (index: number) => {
    setCustomers(customers.filter((_, i) => i !== index));
  };

  // Function to add a new customer
  const addCustomer = () => {
    const newCustomer: CustomerData = {
      id: `${customers.length + 1}`,
      isActive: false,
      foods: [],
      total: 0,
    };
    setCustomers([...customers, newCustomer]);
  };

  return (
    <CustomersContext.Provider value={{ customers, setCustomers }}>
      <div>
        <h1>Food List</h1>
        <div>
          {customers.map((customer, index) => (
            <div key={index}>
              <Customer
                customer={{ ...customer, foods: guestOrder }}
                onClick={() => handleCustomerClick(index)}
                onRemove={() => handleRemoveCustomer(index)}
              />
            </div>
          ))}
          <button onClick={addCustomer}>+</button>
        </div>
      </div>
    </CustomersContext.Provider>
  );
};

export default Customers;
