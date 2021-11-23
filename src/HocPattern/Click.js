import React from "react";

function Click(props) {
  return (
    <div>
      <button onClick={props.updateCount}>Clicked {props.count} times</button>
    </div>
  );
}

export default Click;
