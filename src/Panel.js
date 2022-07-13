import React from "react";
import { Button } from "./Button";

export const Panel = (props) => {
  return (
    <div className="panel">
      <p>{props.variable}</p>
      <div className="numbers">
        {props.numbers.map((number) => (
          <Button key={number} function={props.inputFunction} text={number} />
        ))}

        {props.operator ? null : (
          <button onClick={props.clearFunction}>Clear</button>
        )}

        {props.operator ? null : (
          <button onClick={props.recallFunction}>Recall</button>
        )}
      </div>
    </div>
  );
};
