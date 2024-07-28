import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

function Appcontainer() {
  return (
    <div>
      <Provider store={Store}>
        <App />
      </Provider>
    </div>
  );
}

export default Appcontainer;
