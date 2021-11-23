import React from "react";
import ReactDOM from "react-dom";

function PortalOne() {
  return ReactDOM.createPortal(
    <h2 className="portal-content">It is present ouutside root node of DOM</h2>,
    document.getElementById("portal-test")
  );
}

export default PortalOne;
