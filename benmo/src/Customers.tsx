import React, { useState, createContext, FC } from 'react';

// Define types for customer data
interface Customer {
    id: string;
    isActive: boolean;
    foods: string[];
    total: number;
}

// Create a Context for the Customers
export const CustomersContext = createContext<Customer[]>([]);

// Customer component to render individual customer
const Customer: FC<{ customer: Customer; onClick: () => void }> = ({ customer, onClick }) => {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer', backgroundColor: customer.isActive ? 'lightgreen' : 'white' }}>
            <h3>{customer.id}</h3>
            <p>Email: {customer.isActive ? 'Active' : 'Inactive'}</p>
            <p>Foods: {customer.foods.join(', ')}</p>
            <p>Total: {customer.total}</p>
        </div>
    );
};

const Customers: FC = () => {
    // Initialize state with an array of customer objects
    const [customers, setCustomers] = useState<Customer[]>([
        { id: '1', isActive: true, foods: ['Pizza', 'Burger'], total: 100 },
        { id: '2', isActive: false, foods: ['Sushi', 'Ramen'], total: 200 },
        { id: '3', isActive: false, foods: ['Pasta', 'Salad'], total: 150 }
    ]);

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