import React from "react";
import { useReducer } from "react";
import { reducer } from "./CounterReducer";

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { value: 7 });

  console.log("RE-Rendering");
  return (
    <div>
      <h2>Count is {state.value}</h2>
      <button
        onClick={() => {
          dispatch({ type: "inc", value: 1 });
        }}
      >
        Increase Count
      </button>
    </div>
  );
}

export default UseReducerHook;
