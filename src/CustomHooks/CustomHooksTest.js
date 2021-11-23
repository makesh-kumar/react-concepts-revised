import React, { useState } from "react";
import useCounter from "./UseCounter";

function CustomHooksTest() {
  const [id, setId] = useState(8);
  const data = useCounter(id);

  return (
    <div>
      {JSON.stringify(data)}
      <input
        value={id}
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />

      {id}
    </div>
  );
}

export default CustomHooksTest;
