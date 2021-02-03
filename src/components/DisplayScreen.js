import React from "react";

function DisplayScreen(props) {
  return (
    <div className="display">
      <p>{props.value}</p>
    </div>
  );
}

export default DisplayScreen;
