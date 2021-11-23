import React from "react";
import { useHistory } from "react-router";

function ButtonPage() {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <h2>This is the button page</h2>
      <button onClick={goBack}>Go back</button>
    </div>
  );
}

export default ButtonPage;
