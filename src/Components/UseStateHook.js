import React, { useState, useEffect } from "react";
import ChildComp from "./ChildComp";

function UseStateHook() {
  let [name, updateName] = useState("Makes");
  // let [name, updateName] = useState(() => {
  //   return "AnotherWayOfInitializingStateValues";
  // });

  const changeName = () => {
    // updateName("kk");
    updateName((prev) => {
      // we have to spread remaining properties incase of objects
      return prev + "ss";
    });
  };
  console.log("Reloading ...");
  return (
    <div>
      <h2>Component One</h2>
      {name}
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
      <button onClick={changeName}>Change Name</button>
      <ChildComp name={name} />
    </div>
  );
}

export default UseStateHook;
