import React from "react";
import DisplayScreen from "../components/DisplayScreen";
import KeyPad from "../components/KeyPad";

function HomePage(props) {
  return (
    <div className="calculator_main">
      <DisplayScreen />
      <KeyPad />
    </div>
  );
}

export default HomePage;
