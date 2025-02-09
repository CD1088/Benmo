import "./App.css";
import React from "react";
import Customers from "./Customers.tsx";
import OrderList from "./components/OrderList";

function App() {
  return (
    <div>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <Customers />
      </div>
    </div>
  );
}

export default App;
