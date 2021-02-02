import React from "react";
import { connect } from "react-redux";

function HomePage(props) {
  return (
    <React.Fragment>
      <div justify="center">
        <h1>Calculator</h1>
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
