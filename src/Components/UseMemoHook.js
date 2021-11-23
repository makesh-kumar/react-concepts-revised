import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const getName = useMemo(() => {
    console.log("in get name func");
    return "Makesh";
  }, [name]);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>

      <h2> Name is {getName}</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default UseMemoHook;
