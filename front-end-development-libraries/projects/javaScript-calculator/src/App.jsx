import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleCLick = (event) => {
    switch (event.target.innerText) {
      case "AC":
        setDisplay("");
        break;
      case "9":
      case "8":
      case "7":
      case "6":
      case "5":
      case "4":
      case "3":
      case "2":
      case "1":
      case "-": 
      case "+":
      case "*":
      case "/":
        const opsRegex = /[\+\-\/\*][\+\/\*]/;
        const opsReplaceRegex = /[\+\-\/\*][\+\-\/\*]/;
        if (opsRegex.test(display + event.target.innerText)) {
          setDisplay(display.replace(opsReplaceRegex, event.target.innerText));
        }
        else {
          setDisplay(display + event.target.innerText);
        }
      break;
      case "0":
        if (display.charAt(0) != "") {
          setDisplay(display + "0");
        }
        break;
      case "=":
        setDisplay(eval(display));
        break;
      case ".":
        const decimalRegex = /\.\.|\.[0-9]\./;
        if (!decimalRegex.test(display + ".")) {
          setDisplay(display + ".");
        }
        break;
    }
  };

  return (
    <>
      <div id="container">
        <div id="calculator">
          <div id="display">{display === "" ? "0": display}</div>
          <button id="equals" onClick={handleCLick}>=</button>
          <button id="zero" onClick={handleCLick}>0</button>
          <button id="one" onClick={handleCLick}>1</button>
          <button id="two" onClick={handleCLick}>2</button>
          <button id="three" onClick={handleCLick}>3</button>
          <button id="four" onClick={handleCLick}>4</button>
          <button id="five" onClick={handleCLick}>5</button>
          <button id="six" onClick={handleCLick}>6</button>
          <button id="seven" onClick={handleCLick}>7</button>
          <button id="eight" onClick={handleCLick}>8</button>
          <button id="nine" onClick={handleCLick}>9</button>
          <button id="add" onClick={handleCLick}>+</button>
          <button id="subtract" onClick={handleCLick}>-</button>
          <button id="multiply" onClick={handleCLick}>*</button>
          <button id="divide" onClick={handleCLick}>/</button>
          <button id="decimal" onClick={handleCLick}>.</button>
          <button id="clear" onClick={handleCLick}>AC</button>
        </div>
      </div>
      <span id="signature">
        Coded by{" "}
        <a href="https://github.com/ZacHorton" target="_blank">
          Zac Horton
        </a>
      </span>
    </>
  );
}

export default App;
