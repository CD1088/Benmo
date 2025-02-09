import React, { FC } from 'react';

// Define types for customer data
interface Customer {
    id: string;
    isActive: boolean;
    foods: string[];
    total: number;
}

// Customer component to render individual customer
const Customer: FC<{ customer: Customer; onClick: () => void }> = ({ customer, onClick }) => {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer', backgroundColor: customer.isActive ? 'lightgreen' : 'white' }}>
            <h3>{customer.id}</h3>
            <p>Status: {customer.isActive ? 'Active' : 'Inactive'}</p>
            <p>Foods: {customer.foods.join(', ')}</p>
            <p>Total: {customer.total}</p>
        </div>
    );
};

export default Customer;