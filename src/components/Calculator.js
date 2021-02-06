import React, { useState } from "react";
import { evaluate } from "mathjs";
import { Button } from "../common/Button";
import { buttonValueDigits, buttonValueOperands } from "../utils/buttonValues";
import DisplayScreen from "./DisplayScreen";

const maxdigitafterPoint = 16;

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(false);
  const [operatorInitated, setOperatorInitated] = useState(null);
  const [firstNumber, setFirstNumber] = useState("0");
  const [clearAll, setClearAll] = useState(true);
  const [scientificMode, setScientificMode] = useState(false);

  const handlePoint = (newKeyValue) => {
    if (operatorInitated) {
      setDisplayValue(newKeyValue);
      setOperatorInitated(false);
      setClearAll(false);
    } else {
      let newDisplayValue =
        displayValue === "0"
          ? `${newKeyValue}`
          : `${displayValue}${newKeyValue}`;
      setDisplayValue(newDisplayValue);
      setOperatorInitated(false);
      setClearAll(false);
    }
  };

  const handleCalulation = (newKeyValue) => {
    let newDisplayValue = null;
    let newOperator = null;
    let calculateString = null;

    if (firstNumber === "0" || operator == null || operatorInitated) {
      setOperatorInitated(true);
      setFirstNumber(displayValue);
      setOperator(newKeyValue);
      setClearAll(false);
      return;
    } else {
      calculateString = `${firstNumber}${operator}${displayValue}`;
      try {
        newDisplayValue = `${evaluate(calculateString)}`;
      } catch (e) {
        newDisplayValue = "Error";
      }
      if (newDisplayValue === "Infinity") {
        newDisplayValue = "Error";
      }
      newOperator = newKeyValue === "=" ? null : newKeyValue;
      setDisplayValue(newDisplayValue);
      setOperatorInitated(true);
      setFirstNumber(newDisplayValue);
      setOperator(newOperator);
      setClearAll(false);
    }
  };

  const processPoint = (newKeyValue) => {
    const needPoint = `${displayValue}`.indexOf(".") === -1 ? true : false;
    let newDisplayValue = null;

    if (operatorInitated) {
      setDisplayValue("0");
      setOperatorInitated(false);
      setClearAll(false);
    } else {
      if (needPoint) {
        newDisplayValue = `${displayValue}${newKeyValue}`;
        setDisplayValue(`${newDisplayValue}`);
        setOperatorInitated(false);
        setClearAll(false);
      }
    }
  };

  const handlePlusMiniusToggle = () => {
    const newDisplayValue =
      parseFloat(displayValue).toPrecision(maxdigitafterPoint) * -1;
    setDisplayValue(`${newDisplayValue}`);
    setOperatorInitated(false);
    setClearAll(false);
  };

  const removeAllData = () => {
    if (clearAll) {
      setDisplayValue("0");
      setFirstNumber("0");
      setOperator(null);
      setOperatorInitated(false);
      setClearAll(true);
    } else {
      setDisplayValue("0");
      setClearAll(true);
    }
  };

  const handleUnknownKey = () => {
    console.log("Something wrong");
  };

  const handleFunctionality = (newKeyValue) => {
    switch (newKeyValue) {
      case "C":
        removeAllData(newKeyValue);
        break;
      case "±":
        handlePlusMiniusToggle(newKeyValue);
        break;
      case ".":
        processPoint(newKeyValue);
        break;
      default:
        handleUnknownKey(newKeyValue);
    }
  };

  const calculateSquare = () => {
    let convertType = parseInt(displayValue);
    let squareValue = convertType ** 2;
    setDisplayValue(`${squareValue}`);
    setOperatorInitated(false);
    setClearAll(false);
  };
  const calculateSquareRoot = () => {
    let convertType = parseInt(displayValue);
    if (convertType < 0) {
      setDisplayValue("Error");
      setOperatorInitated(false);
      setClearAll(false);
      return;
    } else {
      let squareRoot = Math.sqrt(convertType);
      setDisplayValue(`${squareRoot}`);
      setOperatorInitated(false);
      setClearAll(false);
    }
  };

  const handleCalButtonClick = (e) => {
    processPressedKey(`${e.target.value}`);
  };

  const processPressedKey = (newKeyValue) => {
    const isDigit = buttonValueDigits.includes(newKeyValue);
    const isOperator = buttonValueOperands.includes(newKeyValue);
    if (newKeyValue === "sqr") {
      calculateSquare();
    }
    if (newKeyValue === "sqrt") {
      calculateSquareRoot();
    }
    if (isDigit) {
      handlePoint(newKeyValue);
    } else {
      if (isOperator) {
        handleCalulation(newKeyValue);
      } else {
        handleFunctionality(newKeyValue);
      }
    }
  };

  const addScienticMode = () => {
    setScientificMode(!scientificMode);
  };

  return (
    <div className="calc_main">
      <DisplayScreen value={displayValue} />

      <Button
        className="show_scientific"
        onClick={addScienticMode}
        label={scientificMode ? "Normal Mode" : "Scientific Mode"}
      />

      {scientificMode ? (
        <div className="calc_buttons">
          <Button
            label="&#177;"
            value="±"
            onClick={(e) => handleCalButtonClick(e)}
            className="kepadButton"
          />
          <Button
            label="&#13217;"
            value="sqr"
            onClick={(e) => handleCalButtonClick(e)}
            className="kepadButton"
          />
          <Button
            label="&#8730;"
            value="sqrt"
            onClick={(e) => handleCalButtonClick(e)}
            className="kepadButton"
          />
        </div>
      ) : null}

      <div className="scientific_block">
        <div className="calc_buttons">
          <div className="innerCalc">
            <div className="digits">
              {buttonValueDigits.map((item, index) => (
                <Button
                  key={index}
                  onClick={(e) => handleCalButtonClick(e)}
                  label={item}
                  className="kepadButton"
                  value={item}
                />
              ))}
              <Button
                onClick={(e) => handleCalButtonClick(e)}
                label="."
                className="kepadButton"
                value="."
              />
              <Button
                label="C"
                value="C"
                onClick={(e) => handleCalButtonClick(e)}
                className="kepadButton"
              />
            </div>

            <div className="operators">
              {buttonValueOperands.map((item, index) => (
                <Button
                  key={index}
                  onClick={(e) => handleCalButtonClick(e)}
                  label={item}
                  className="kepadButton"
                  value={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
