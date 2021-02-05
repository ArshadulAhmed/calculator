import React, { useState } from "react";
import { evaluate } from "mathjs";
import { Button } from "../common/Button";
import { buttonValueDigits, buttonValueOperands } from "../utils/buttonValues";
import DisplayScreen from "./DisplayScreen";

const maxPrecision = 16;

function Calculator(props) {
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
  const clearAllValues = () => {
    if (clearAll) {
      setDisplayValue("0");
      setFirstOperand("0");
      setIsOperatorOn(null);
      setIsOperatorOn(false);
      setClearAll(true);
    }
  };
  const processDot = (value) => {
    const isPoint = displayValue.indexOf(".") === -1 ? true : false;
    //   let newValueToDisplayOnPoint = null;
    if (isOperatorOn) {
      setDisplayValue("0.");
      setIsOperatorOn(false);
      setClearAll(false);
    } else {
      if (isPoint) {
        //newValueToDisplayOnPoint = `${displayValue}${value}`;
        setDisplayValue(`${displayValue}${value}`);
      }
    }
  };
  const processPlusMinus = () => {
    const newDisplayToBeValue =
      parseFloat(displayValue).toPrecision(maxPrecision) * 1;
    setDisplayValue(newDisplayToBeValue);
    setIsOperatorOn(false);
    setClearAll(false);
  };
  const processUnknownValue = () => {
    console.log("Unexpected input");
  };
  const processFunctionKey = (value) => {
    switch (value) {
      case "C":
        clearAllValues();
        break;
      case "±":
        processPlusMinus();
        break;
      case ".":
        processDot();
        break;
      default:
        processUnknownValue();
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
      processOperator(value);
    } else {
      processFunctionKey(value);
    }
  };

  return (
    <div className="calc_main">
      <DisplayScreen value={displayValue} />
      <div className="calc_buttons">
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
    </div>
  );
}

export default Calculator;
