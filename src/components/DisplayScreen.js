import React from "react";
import { evaluate } from "mathjs";

const maxCharsAtFullSize = 6;
const scaleFactor = "scale(0.36)";

const maxPrecision = 16;

function DisplayScreen(props) {
  const valueRecived = props.value;
  const pointAt = `${valueRecived}`.indexOf(".");
  const decimalValue = valueRecived.substring(
    pointAt,
    evaluate(valueRecived.length)
  );
  const precisionWithFraction =
    pointAt === -1 ? 0 : evaluate(decimalValue.length - 1);

  let formattedValue = null;
  let scientificNotation = null;
  let scaleDown = null;

  formattedValue = parseFloat(valueRecived).toLocaleString(undefined, {
    minimumFractionDigits: precisionWithFraction,
  });

  if (formattedValue === "NaN") {
    formattedValue = "Error";
  } else {
    if (formattedValue.length > maxPrecision - 1) {
      scientificNotation = parseFloat(valueRecived).toExponential(
        maxPrecision - 4
      );
      if (
        scientificNotation.substring(
          scientificNotation.length - 3,
          scientificNotation.length
        ) === "e+0"
      ) {
        scientificNotation = parseFloat(valueRecived).toExponential(
          maxPrecision - 1
        );
        scientificNotation = scientificNotation.substring(
          0,
          scientificNotation.length - 3
        );
      }
      formattedValue = scientificNotation;
      if (formattedValue === "NaN") {
        formattedValue = "Overflow\xA0Error";
      }
    }
  }
  scaleDown =
    `${formattedValue}`.length > maxCharsAtFullSize ? scaleFactor : "scale(1)";

  return (
    <div className="display">
      <p>{formattedValue}</p>
    </div>
  );
}

export default DisplayScreen;
