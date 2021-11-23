import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function About() {
  let history = useHistory();
  let location = useLocation();
  const goToBtn = () => {
    history.push("/button");
    // console.log(location);
  };
  return (
    <div>
      <h2>This is the About page</h2>
      <button className="link" onClick={goToBtn}>
        Button
      </button>
    </div>
  );
}

export default About;
