import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(88);

  // const updateCount = () => {
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  // };
  return <div>{props.render(count, setCount)}</div>;
}

export default Counter;
