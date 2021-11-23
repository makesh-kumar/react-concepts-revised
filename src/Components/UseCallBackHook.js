import React, { useCallback, useState } from "react";
import ChildComp from "./ChildComp";

function UseCallBackHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);
  const [id, setId] = useState(0);

  const increaseCounter = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count is : {count}</h2>
      <ChildComp name={name} increaseCounter={increaseCounter} />

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button onClick={() => setId(id + 1)}> ID {id}</button>
    </div>
  );
}

export default UseCallBackHook;
