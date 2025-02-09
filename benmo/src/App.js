import logo from "./logo.svg";
import "./App.css";

function App() {
  var user = 3;
  const items = [
    {
      name: "Noodles",
      cost: 15,
      owner: -1,
    },
    {
      name: "Rice",
      cost: 5,
      owner: -1,
    },
    {
      name: "Boba",
      cost: 7,
      owner: -1,
    },
    {
      name: "Soup",
      cost: 4,
      owner: -1,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
