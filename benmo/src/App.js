import PrintItems from './foodList'

import './App.css';

function App() {
  var user = 3;
  const items = [
    {
      name: "Noodles",
      cost: 15,
      owner: -1
    },
    {
      name: "Rice",
      cost: 5,
      owner: -1
    },
    {
      name: "Boba",
      cost: 7,
      owner: -1
    }
  ];
  return PrintItems(items, user);
}

export default App;
