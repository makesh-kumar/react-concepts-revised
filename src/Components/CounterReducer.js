import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc": {
      return { ...state, value: state.value + action.value };
    }
    case "dec": {
      return { ...state, value: state.value - action.value };
    }
    default: {
      return state;
    }
  }
};

function CounterReducer() {
  return <div></div>;
}

export default CounterReducer;

export { reducer };
