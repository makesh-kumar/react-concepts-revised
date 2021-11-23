import React, { useEffect } from "react";

function ChildComp(props) {
  console.log("Child rendered");
  // useEffect(() => {
  //   console.log(props);
  //   props.name = "jj";
  // });
  return (
    <div>
      Child Name : {props.name}
      <hr />
      <h2>Use Call back</h2>
      <button onClick={props.increaseCounter}>Increase Counter</button>
    </div>
  );
}

export default React.memo(ChildComp);
