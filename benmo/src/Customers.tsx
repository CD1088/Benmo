import React, { FC, createContext } from 'react';
import Customer, { CustomerData } from './Customer.tsx';
import useLocalStorage from './hooks/useLocalStorage.ts'; // Import the custom hook

// Create a Context for the Customers
export const CustomersContext = createContext<CustomerData[]>([]);

const Customers: FC = () => {
    const [customers, setCustomers] = useLocalStorage<CustomerData[]>('customers', [
        { id: '1', isActive: true, foods: [], total: 0 },
        { id: '2', isActive: false, foods: [], total: 0 },
        { id: '3', isActive: false, foods: [], total: 0 }
    ]);

    // Function to handle customer click
    const handleCustomerClick = (index: number) => {
        setCustomers(customers.map((customer, i) => ({
            ...customer,
            isActive: i === index
        })));
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
            total: 0
        };
        setCustomers([...customers, newCustomer]);
    };

    return (
        <CustomersContext.Provider value={customers}>
            <div>
                {customers.map((customer, index) => (
                    <Customer
                        key={index}
                        customer={customer}
                        onClick={() => handleCustomerClick(index)}
                        onRemove={() => handleRemoveCustomer(index)}
                    />
                ))}
                <button onClick={addCustomer}>+</button>
            </div>
        </CustomersContext.Provider>
    );
};

export default Customers;