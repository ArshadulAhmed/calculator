import React, { useState } from "react";
import DisplayScreen from "../components/DisplayScreen";
import Calculator from "../components/Calculator";
import { Button } from "../common/Button";

function CalculatorMain() {
  const [theme, setTheme] = useState("light");
  const changeTheme = (value) => {
    console.log("va", value);
    if (theme !== value) {
      setTheme(value);
    }
  };

  document.documentElement.setAttribute("data-theme", theme);

  return (
    <div className="calculator_main">
      <Calculator currentTheme={theme} />
      <div className="control_theme">
        <Button
          onClick={(e) => {
            changeTheme(e.target.value);
          }}
          label="dark theme"
          value="dark"
          className="theme_button"
        >
          Dark Theme
        </Button>
        <Button
          onClick={(e) => {
            changeTheme(e.target.value);
          }}
          label="light theme"
          value="light"
          className="theme_button"
        >
          Light Theme
        </Button>
      </div>
    </div>
  );
}

export default CalculatorMain;
