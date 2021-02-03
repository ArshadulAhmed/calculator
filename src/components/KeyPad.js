import React, { useState } from "react";
import { evaluate } from "mathjs";
import { Button } from "../common/Button";
import { buttonValueDigits, buttonValueOperands } from "../utils/buttonValues";

function KeyPad(props) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isOperatorOn, setIsOperatorOn] = useState(false);
  const [clearAll, setClearAll] = useState(true);
  const [firstOperand, setFirstOperand] = useState("0");
  const [operatorInitated, setOperatorInitated] = useState(null);

  const processDigit = (value) => {
    if (isOperatorOn) {
      setDisplayValue(value);
      setIsOperatorOn(false);
      setClearAll(false);
    } else {
      setDisplayValue(displayValue === "0" ? value : `${displayValue}${value}`);
      setIsOperatorOn(false);
      setClearAll(false);
    }
  };

  const processOperator = (value) => {
    let newValueToDisplay = null;
    let newOperator = null;
    let stringToCalculate = null;

    if (firstOperand === "0" || operatorInitated == null || isOperatorOn) {
      setIsOperatorOn(true);
      setFirstOperand(displayValue);
      setOperatorInitated(value);
      setClearAll(false);
    } else {
      stringToCalculate = `${firstOperand}${operatorInitated}${displayValue}`;
      try {
        newValueToDisplay = `${evaluate(stringToCalculate)}`;
      } catch (e) {
        newValueToDisplay = "Error";
      }
      if (newValueToDisplay === "Infinity") {
        newValueToDisplay = "Error";
      }
      newOperator = value === "=" ? null : value;
      setDisplayValue(newValueToDisplay);
      setIsOperatorOn(false);
      setClearAll(false);
    }
  };

  const handleClick = (value) => {
    processUserEnteredValue(value);
  };
  const processUserEnteredValue = (value) => {
    const isDigitEntered = buttonValueDigits.includes(value);
    const isOperandEntered = buttonValueOperands.includes(value);
    if (isDigitEntered) {
      processDigit(value);
    } else if (isOperandEntered) {
      processOperator();
    } else {
      //processFunctionKey()
    }
  };

  console.log("displayValue", displayValue);
  console.log("isOperatorOn", isOperatorOn);
  console.log("firstOperand", firstOperand);

  return (
    <div>
      {buttonValueDigits.map((item, index) => (
        <Button
          key={index}
          onClick={() => handleClick(item)}
          label={item}
          className="kepadButton"
        />
      ))}

      {buttonValueOperands.map((item, index) => (
        <Button
          key={index}
          onClick={() => handleClick(item)}
          label={item}
          className="kepadButton"
        />
      ))}
    </div>
  );
}

export default KeyPad;
