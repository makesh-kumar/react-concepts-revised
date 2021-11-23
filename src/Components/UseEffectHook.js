import React, { useState, useEffect, useContext } from "react";
import { UiContext } from "../App";

function UseEffectHook() {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState("");

  const theme = useContext(UiContext);
  useEffect(() => {
    console.log("In useEffect...");

    // clean up func will be executed on every render(useEffect Call)
    return () => {
      console.log("Destroying ...");
    };
  }, [count]);

  const updateName = (name) => {
    console.log("UpdateName Called");
    setName(name);
  };
  console.log("RE-RENDERINg");
  return (
    <div>
      <h1>Use Context - Theme : {theme}</h1>
      <h2>Use Effect Hook</h2>
      {count}

      <div>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increase Count
        </button>

        <button onClick={() => setCounter((prev) => prev - 1)}>
          Decrease Count
        </button>
      </div>
      <hr />

      <input
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
      <p>Your Name is {name}</p>
    </div>
  );
}

export default UseEffectHook;
