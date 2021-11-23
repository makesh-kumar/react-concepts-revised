import React from "react";
import ReactRenderParent from "./ReactRenderParent";
import ReactRenderChild from "./ReactRenderChild";

function ReactRenderTest() {
  return (
    <div>
      <ReactRenderParent>
        {/* <ReactRenderChild /> */}
      </ReactRenderParent>
    </div>
  );
}

export default ReactRenderTest;
