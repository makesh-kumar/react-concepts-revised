import React, { useState } from "react";

function Common(props) {
  const [count, setcount] = useState(0);
  return props.children(count, setcount);
}

export default Common;
