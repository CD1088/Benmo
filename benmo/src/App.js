import "./App.css";
import React from "react";
import Customers from "./Customers.tsx";
import OrderList from "./components/OrderList.jsx";

function App() {
  return (
    <>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <Customers />
      </div>
      <div className="App">
        <h1>Food List</h1>
        <OrderList />
      </div>
    </>
  );
}

export default App;
