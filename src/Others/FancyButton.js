import React from "react";

function FancyButton(props, ref) {
  const fn = (a) => {};

  // fn(1);
  console.log(ref);
  return (
    <div>
      <button style={{ color: "red" }}>
        <input ref={ref} type="text" />
        {props.children}
      </button>
    </div>
  );
}

export default React.forwardRef(FancyButton);
