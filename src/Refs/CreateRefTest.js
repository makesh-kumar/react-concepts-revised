import React, { createRef, useEffect, useRef, useState } from "react";

function CreateRefTest() {
  const [nameOne, setnameOne] = useState("");
  const [nameTwo, setnameTwo] = useState("");
  const [count, setCount] = useState(0);

  const CRef = createRef();
  const URef = useRef();

  useEffect(() => {
    CRef.current = "AAAAA";
    URef.current = "BBBB";
    // console.log("in use Effect");
    // console.log("CRef", CRef.current.value);
    // console.log("URef", URef.current.value);
  }, []);

  useEffect(() => {
    console.log("CRef", CRef.current);
    console.log("URef", URef.current);
  }, [count]);

  return (
    <div>
      <hr />
      <h2>Create Ref</h2>
      {/* <input
        type="text"
        ref={CRef}
        value={nameOne}
        onChange={(e) => {
          setnameOne(e.target.value);
        }}
      /> */}
      <hr />
      <h2>Use Ref</h2>
      {/* <input
        type="text"
        ref={URef}
        value={nameTwo}
        onChange={(e) => {
          setnameTwo(e.target.value);
        }}
      /> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me {count}!!!
      </button>
    </div>
  );
}

export default CreateRefTest;
