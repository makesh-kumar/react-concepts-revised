import React, { useState, useMemo } from "react";
import ReactRenderChild from "./ReactRenderChild";

function ReactRenderParent(props) {
  const [count, setCount] = useState(0);

  const [names, setNames] = useState({ fName: "Makesh", lName: "Kumar" });

  const memoizedNames = useMemo(() => names, [names]);
  const updateName = () => {
    const newName = { ...names };
    newName.fName = "sssss";
    newName.lName = "jjjjj";

    setNames(newName);
  };
  console.log("Parent re-render");
  return (
    <div>
      <h3>React Render Parent</h3>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Count is {count}
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        set count 0
      </button>

      <button
        onClick={() => {
          setCount(5);
        }}
      >
        set count 5
      </button>

      <button onClick={updateName}>Update name </button>
      {/* {props.children} */}
      <ReactRenderChild >
       <p>KKK</p>
 
      </ReactRenderChild>
    </div>
  );
}

export default ReactRenderParent;
