import { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <div id="container">
        <div id="calculator">
          <div id="display">0</div>
          <button id="equals">=</button>
          <button id="zero">0</button>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="add">+</button>
          <button id="subtract">-</button>
          <button id="multiply">x</button>
          <button id="divide">/</button>
          <button id="decimal">.</button>
          <button id="clear">AC</button>
        </div>
      </div>
      <span id="signature">Coded by Zac Horton</span>
    </>
  );
}

export default App;
