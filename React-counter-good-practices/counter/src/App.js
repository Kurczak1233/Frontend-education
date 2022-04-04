import './App.css';
import ArraysLogic from './ArraysLogic';
import CounterLogic from "./CounterLogic";

function App() {

  const {counter, handleCounterIncrement} = CounterLogic();
  const {handleChangeItem, element} = ArraysLogic();


  //Splice element form an original array (XXXXX elements);
  //Splice element form an copied array as save state old state => new array state array (XXXXX elements);

  return (
    <>
    <div className="App">
        <button onClick={() => {handleCounterIncrement()} }>Counter</button>
        <div>{counter}</div>
    </div>
    <div>
        Chosen element:
        <div onClick={() => handleChangeItem(1)}>1</div>
        <div onClick={() => handleChangeItem(2)}>2</div>
        <div onClick={() => handleChangeItem(3)}>3</div>
        {element && ( <span>{element.id}{element.name}</span>)}
    </div>
    </>
  );
}

export default App;
