// import logo from './logo.svg';
import RenderFoodItem from './foodItem'
import './App.css';

function App() {
  const item1 = {
    name: "Noodles",
    cost: 15,
    owner: 1
  };
  return (
    <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
        <RenderFoodItem foodItem={item1} user="3" />
      </table>
    </div>
  );
}

export default App;
