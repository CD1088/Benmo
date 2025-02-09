// import logo from './logo.svg';
import RenderFoodItem from './foodItem'
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
  return (
    <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
        <RenderFoodItem foodItem={items[0]} user={user} />
        <RenderFoodItem foodItem={items[1]} user={user} />
        <RenderFoodItem foodItem={items[2]} user={user} />
      </table>
    </div>
  );
}

export default App;
