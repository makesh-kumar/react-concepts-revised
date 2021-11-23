import React from "react";
import Click from "./Click";
import WithCounter from "./WithCounter";

function HocPattern() {
  const EnhancedComponent = WithCounter(Click);
  return (
    <div>
      <EnhancedComponent />
    </div>
  );
}

export default HocPattern;
