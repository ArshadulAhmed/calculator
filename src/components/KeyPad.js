import React from "react";
import { Button } from "../common/Button";

const buttonValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "=",
];

function KeyPad(props) {
  const handleClick = (value) => {
    // switch (value) {
    //   case "+":
    //     props.handlePlus(value);
    //     break;
    //   case "-":
    //     props.handleMinus(value);
    //     break;
    //   case "*":
    //     props.handleMultipication(value);
    //     break;
    //   case "/":
    //     props.handleDivision(value);
    //     break;
    //   case "=":
    //     props.handleEquel(value);
    //     break;
    //   default:
    //     props.digitHanndle(parseInt(value));
    // }
    console.log(value);
  };

  return (
    <div>
      {buttonValues.map((item, index) => (
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
