import React from "react";
import "../assets/main.css";
function LayoutCustom(props) {
  return <div className="main_layer">{props.children}</div>;
}

export default LayoutCustom;
