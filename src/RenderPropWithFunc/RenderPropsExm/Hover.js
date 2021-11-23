import React from "react";

function Hover(props) {
  return (
    <div>
      <button
        onMouseOver={() => {
          props.setCount(props.count + 1);
        }}
      >
        You hovered me {props.count} times
      </button>
    </div>
  );
}

export default Hover;
