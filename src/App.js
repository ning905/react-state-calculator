import "./App.css";
import { useState } from "react";
import { Panel } from "./Panel";

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
      <Panel
        variable={num1}
        inputFunction={inputNum1}
        clearFunction={clearNum1}
        recallFunction={num1RecallAnswer}
        numbers={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]}
        operator={false}
      />

      <Panel
        variable={operator}
        inputFunction={inputOperator}
        numbers={["+", "-", "*", "÷"]}
        operator={true}
      />

      <Panel
        variable={num2}
        inputFunction={inputNum2}
        clearFunction={clearNum2}
        recallFunction={num2RecallAnswer}
        numbers={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]}
        operator={false}
      />

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
