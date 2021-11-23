import React, { useRef, useEffect } from "react";
import ChildRef from "./ChildRef";

function RefTest() {
  const inpRef = useRef();

  useEffect(() => {
    inpRef.current.focus();
    return () => {};
  }, []);
  return (
    <div>
      <ChildRef ref={inpRef} />
    </div>
  );
}

export default RefTest;
