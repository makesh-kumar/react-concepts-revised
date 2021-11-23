import React, { useState } from "react";

function ProfilerTestChild() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profiler Test Child</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase {count}
      </button>
    </div>
  );
}

export default ProfilerTestChild;
