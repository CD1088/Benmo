import React, { useState, useEffect, createContext, FC } from 'react';
import Customer from './Customer.tsx';

// Create a Context for the Customers
export const CustomersContext = createContext<Customer[]>([]);

const Customers: FC = () => {
    // Retrieve initial state from local storage or use default state
    const initialCustomers = JSON.parse(localStorage.getItem('customers') || '[]') as Customer[];
    const [customers, setCustomers] = useState<Customer[]>(initialCustomers.length > 0 ? initialCustomers : [
        { id: '1', isActive: true, foods: ['Pizza', 'Burger'], total: 100 },
        { id: '2', isActive: false, foods: ['Sushi', 'Ramen'], total: 200 },
        { id: '3', isActive: false, foods: ['Pasta', 'Salad'], total: 150 }
    ]);

    // Save customers state to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('customers', JSON.stringify(customers));
    }, [customers]);

    // Function to handle customer click
    const handleCustomerClick = (index: number) => {
        setCustomers(customers.map((customer, i) => ({
            ...customer,
            isActive: i === index
        })));
    };

    // Function to add a new customer
    const addCustomer = () => {
        const newCustomer: Customer = {
            id: `${customers.length + 1}`,
            isActive: false,
            foods: ['New Food'],
            total: 50 + customers.length * 10
        };
        setCustomers([...customers, newCustomer]);
    };

    return (
        <CustomersContext.Provider value={customers}>
            <div>
                {customers.map((customer, index) => (
                    <Customer key={index} customer={customer} onClick={() => handleCustomerClick(index)} />
                ))}
                <button onClick={addCustomer}>+</button>
            </div>
        </CustomersContext.Provider>
    );
};

export default Customers;