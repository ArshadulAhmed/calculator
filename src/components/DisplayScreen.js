import React from "react";
import { evaluate } from "mathjs";

const maxChar = 6;
const scaleFactor = "scale(0.36)";

const maxdigitafterPoint = 16;

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
  let scientificNotationIs = null;
  let scaleDown = null;

  formattedValue = parseFloat(valueRecived).toLocaleString(undefined, {
    minimumFractionDigits: precisionWithFraction,
  });

  if (formattedValue === "NaN") {
    formattedValue = "Error";
  } else {
    if (formattedValue.length > maxdigitafterPoint - 1) {
      scientificNotationIs = parseFloat(valueRecived).toExponential(
        maxdigitafterPoint - 4
      );
      if (
        scientificNotationIs.substring(
          scientificNotationIs.length - 3,
          scientificNotationIs.length
        ) === "e+0"
      ) {
        scientificNotationIs = parseFloat(valueRecived).toExponential(
          maxdigitafterPoint - 1
        );
        scientificNotationIs = scientificNotationIs.substring(
          0,
          scientificNotationIs.length - 3
        );
      }
      formattedValue = scientificNotationIs;
      if (formattedValue === "NaN") {
        formattedValue = "Overflow\xA0Error";
      }
    }
  }
  scaleDown = `${formattedValue}`.length > maxChar ? scaleFactor : "scale(1)";

  return (
    <div className="display">
      <p>{formattedValue}</p>
    </div>
  );
}

export default DisplayScreen;
