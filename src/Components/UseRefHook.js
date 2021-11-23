import React, { useRef, useState } from "react";
import ChildComp from "./ChildComp";

function UseRefHook() {
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  console.log("Re-rendrrs");
  return (
    <div>
      <button
        onClick={() => {
          timeRef.current++;
        }}
      >
        Login REF
      </button>

      <h2>Time REF: {timeRef.current}</h2>

      <hr />
      <button
        onClick={() => {
          setTime(time + 1);
        }}
      >
        Login STATE
      </button>
      <h2>Time STATE: {time}</h2>
    </div>
  );
}

export default UseRefHook;
