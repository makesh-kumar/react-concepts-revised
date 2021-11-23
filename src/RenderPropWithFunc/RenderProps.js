import React from "react";
import RPChild from "./RPChild";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";

function RenderProps() {
  const inc = (count, updateCount) => {
    console.log(count, updateCount);
    return <ClickCounter count={count} updateCount={updateCount} />;
  };
  return (
    <div>
      {/* <RPChild>
        {(props) => {
          console.log("s ", props);
          return <h1>L-{props}</h1>;
        }}
      </RPChild> */}

      <Counter render={inc} />
    </div>
  );
}

export default RenderProps;
