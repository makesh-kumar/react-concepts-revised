import React from "react";
import Click from "./Click";
import Hover from "./Hover";
import Common from "./Common";

function RenderPropsBase() {
  const cl = (count, setCount) => {
    return <Click count={count} setCount={setCount} />;
  };
  return (
    <div>
      <Common>
        {(count, setCount) => {
          return <Click count={count} setCount={setCount} />;
        }}
      </Common>

      <Common>
        {(count, setCount) => {
          return <Hover count={count} setCount={setCount} />;
        }}
      </Common>
    </div>
  );
}

export default RenderPropsBase;
