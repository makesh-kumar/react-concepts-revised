import React from "react";

function ReactRenderChild(props) {
  console.log("Child re-render");
  return (
    <div>
      <h3>React ReactRenderChild</h3>
      <h2>{props.children}</h2>
      {/* Count is {props.count} */}
      <br />
      {/* Name is {props.names.fName} {props.names.lName} */}
    </div>
  );
}

export default React.memo(ReactRenderChild);
