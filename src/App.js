import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LayoutCustom from "./layout/LayoutCustom";
import BaseRoutes from "./routing/BaseRoutes";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <LayoutCustom>
            <BaseRoutes />
          </LayoutCustom>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
