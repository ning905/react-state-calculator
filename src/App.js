import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [operator, setOperator] = useState();
  const [answer, setAnswer] = useState();

  const inputNum1 = (e) => {
    const thisNum = Number(e.target.innerHTML);
    setNum1(thisNum);
  };

  const clearNum1 = () => {
    setNum1(0);
  };

  const inputNum2 = (e) => {
    const thisNum = Number(e.target.innerHTML);
    setNum2(thisNum);
  };

  const clearNum2 = () => {
    setNum2(0);
  };

  const inputOperator = (e) => {
    const thisOperator = e.target.innerHTML;
    setOperator(thisOperator);
  };

  const getAnswer = () => {
    let thisAnswer;
    if (operator === "+") {
      thisAnswer = num1 + num2;
    } else if (operator === "-") {
      thisAnswer = num1 - num2;
    } else if (operator === "*") {
      thisAnswer = num1 * num2;
    } else {
      thisAnswer = num1 / num2;
    }
    setAnswer(thisAnswer);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          <button onClick={inputNum1}>1</button>
          <button onClick={inputNum1}>2</button>
          <button onClick={inputNum1}>3</button>
          <button onClick={inputNum1}>4</button>
          <button onClick={inputNum1}>5</button>
          <button onClick={inputNum1}>6</button>
          <button onClick={inputNum1}>7</button>
          <button onClick={inputNum1}>8</button>
          <button onClick={inputNum1}>9</button>
          <button onClick={inputNum1}>0</button>
          <button onClick={clearNum1}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={inputOperator}>+</button>
          <button onClick={inputOperator}>-</button>
          <button onClick={inputOperator}>*</button>
          <button onClick={inputOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          <button onClick={inputNum2}>1</button>
          <button onClick={inputNum2}>2</button>
          <button onClick={inputNum2}>3</button>
          <button onClick={inputNum2}>4</button>
          <button onClick={inputNum2}>5</button>
          <button onClick={inputNum2}>6</button>
          <button onClick={inputNum2}>7</button>
          <button onClick={inputNum2}>8</button>
          <button onClick={inputNum2}>9</button>
          <button onClick={inputNum2}>0</button>
          <button onClick={clearNum2}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={getAnswer}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
