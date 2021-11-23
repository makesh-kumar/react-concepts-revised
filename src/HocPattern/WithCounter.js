import React, { useState } from "react";

function WithCounter(WrappedComponent) {
  function NewComponent() {
    const [count, setCount] = useState(88);

    const updateCount = () => {
      setCount((prev) => {
        return prev + 1;
      });
    };
    return <WrappedComponent count={count} updateCount={updateCount} />;
  }

  return NewComponent;
}

export default WithCounter;
