import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PortalOne from "./PortalOne";

function PortalTest() {
  const [showNode, update] = useState(true);

  return (
    <div className="parent">
      <div className="child">
        {showNode ? <PortalOne /> : null}

        <div className="content"> Portal test</div>
      </div>
      <button
        onClick={() => {
          update(!showNode);
        }}
      >
        Show Portal Content {showNode}
      </button>
      {showNode}
    </div>
  );
}

export default PortalTest;
