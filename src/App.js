import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [operator, setOperator] = useState();
  const [answer, setAnswer] = useState();
  const [storedAnswer, setStoredAnswer] = useState();

  const inputNum1 = (e) => {
    let thisNum = e.target.innerHTML;

    if (thisNum === "." && num1.includes(".")) {
      return;
    }

    if (num1 !== "0" || thisNum === ".") {
      thisNum = num1 + thisNum;
    }

    setNum1(thisNum);
  };

  const clearNum1 = () => {
    setNum1("0");
  };

  const inputNum2 = (e) => {
    let thisNum = e.target.innerHTML;

    if (thisNum === "." && num2.includes(".")) {
      return;
    }

    if (num2 !== "0" || thisNum === ".") {
      thisNum = num2 + thisNum;
    }

    setNum2(thisNum);
  };

  const clearNum2 = () => {
    setNum2("0");
  };

  const inputOperator = (e) => {
    const thisOperator = e.target.innerHTML;
    setOperator(thisOperator);
  };

  const getAnswer = () => {
    let thisAnswer;
    const number1 = Number(num1);
    const number2 = Number(num2);

    if (operator === "+") {
      thisAnswer = number1 + number2;
    } else if (operator === "-") {
      thisAnswer = number1 - number2;
    } else if (operator === "*") {
      thisAnswer = number1 * number2;
    } else {
      thisAnswer = number1 / number2;
    }
    setAnswer(thisAnswer);
  };

  const storeAnswer = () => {
    setStoredAnswer(answer);
  };

  const num1RecallAnswer = () => {
    setNum1(storedAnswer);
  };

  const num2RecallAnswer = () => {
    setNum2(storedAnswer);
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
          <button onClick={inputNum1}>.</button>
          <button onClick={clearNum1}>Clear</button>
          <button onClick={num1RecallAnswer}>Recall</button>
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
          <button onClick={inputNum2}>.</button>
          <button onClick={clearNum2}>Clear</button>
          <button onClick={num2RecallAnswer}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={getAnswer}>=</button>
          <button onClick={storeAnswer}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
