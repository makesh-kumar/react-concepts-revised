import React from "react";
import { Provider } from "react-redux";
import ReduxChild from "./ReduxChild";
import { counterStore } from "./Store";

function ReduxBase() {
  return (
    <div>
      <Provider store={counterStore}>
        <ReduxChild />
      </Provider>
    </div>
  );
}

export default ReduxBase;
