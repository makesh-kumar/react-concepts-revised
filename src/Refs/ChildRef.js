import React from "react";

function ChildRef(props, inpRef) {
  console.log(props);
  return (
    <div>
      <input ref={inpRef} type="text" />
    </div>
  );
}

export default React.forwardRef(ChildRef);
