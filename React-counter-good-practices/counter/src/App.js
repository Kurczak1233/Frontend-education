import './App.css';
import CounterLogic from "./CounterLogic";

function App() {

  const {counter, increment} = CounterLogic();

  console.log(counter);

  return (
    <div className="App">
        <button onClick={increment}>Counter</button>
        <div>{counter}</div>
    </div>
  );
}

export default App;
