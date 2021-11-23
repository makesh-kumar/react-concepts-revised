import React from "react";

function Click(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setCount(props.count + 1);
        }}
      >
        You clicked me {props.count} times
      </button>
    </div>
  );
}

export default Click;
