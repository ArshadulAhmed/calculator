import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LayoutCustom from "./layout/LayoutCustom";
import BaseRoutes from "./routing/BaseRoutes";

function App() {
  return (
    <React.Fragment>
      <Router>
        <LayoutCustom>
          <BaseRoutes />
        </LayoutCustom>
      </Router>
    </React.Fragment>
  );
}

export default App;
