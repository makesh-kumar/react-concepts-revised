import React from "react";
import { Provider } from "react-redux";
import ReduxThunkChild from "./ReduxThunkChild";
import { userReducer } from "./UserReducer";

function ReduxThunkTest() {
  return (
    <div>
      <Provider store={userReducer}>
        <ReduxThunkChild />
      </Provider>
    </div>
  );
}

export default ReduxThunkTest;
