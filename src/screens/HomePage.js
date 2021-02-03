import React from "react";
import { connect } from "react-redux";
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

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
