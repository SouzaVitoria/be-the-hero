import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Count: {counter}</Header>
      <button onClick={increment}>Count</button>
    </div>
  );
}

export default App;
