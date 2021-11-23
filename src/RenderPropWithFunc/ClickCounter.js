import React from "react";
import Counter from "./Counter";

function ClickCounter(props) {
  console.log(props);
  return (
    <div>
      <button onClick={props.updateCount.bind(null, props.count + 1)}>
        Clicked {props.count} times
      </button>
    </div>
  );
}

export default ClickCounter;
