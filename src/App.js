import React, { useState, useEffect, useRef } from "react";
// import "./App.css";
import "./assets/App.css";

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calc-app">
      <from>
        <input type="text" value={result} ref={inputRef} />
      </from>

      <div className="keypad">
        <button id="clear" onClick={clear}>
          Clear
        </button>
        <button id="backspace" onClick={backspace}>
          &#x2408;
        </button>
        <button name="+" className="operators" onClick={handleClick}>
          +
        </button>
        <button name="7" className="digits" onClick={handleClick}>
          7
        </button>
        <button name="8" className="digits" onClick={handleClick}>
          8
        </button>
        <button name="9" className="digits" onClick={handleClick}>
          9
        </button>
        <button name="-" className="operators" onClick={handleClick}>
          -
        </button>
        <button name="4" className="digits" onClick={handleClick}>
          4
        </button>
        <button name="5" className="digits" onClick={handleClick}>
          5
        </button>
        <button name="6" className="digits" onClick={handleClick}>
          6
        </button>
        <button name="*" className="operators" onClick={handleClick}>
          &times;
        </button>
        <button name="1" className="digits" onClick={handleClick}>
          1
        </button>
        <button name="2" className="digits" onClick={handleClick}>
          2
        </button>
        <button name="3" className="digits" onClick={handleClick}>
          3
        </button>
        <button name="/"  className="operators" onClick={handleClick}>
          /
        </button>
        <button name="." className="operators" onClick={handleClick}>
          .
        </button>
        <button name="0" className="digits" onClick={handleClick}>
          0
        </button>
        
        <button id="result" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;