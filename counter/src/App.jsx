import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    //counter = counter + 1;
    setCounter(counter + 1);
    console.log(counter);
  };

  const removeValue = () => {
    //counter = counter - 1;
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <center>
        <h1>Chai and React</h1>
        <h2>Counter: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </center>
    </>
  );
}

export default App;
