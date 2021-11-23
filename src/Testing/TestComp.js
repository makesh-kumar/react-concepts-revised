import React, { useState, useEffect } from "react";
import TestCompChild from "./TestCompChild";

function TestComp(props) {
  const { name, id } = props;
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState("abc");

  const incCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    const fetchJoke = async () => {
      await fetch("https://jsonplaceholder.typiode.com/users")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data.name);
        })
        .catch((error) => {});
    };

    fetchJoke();
  }, []);

  const addVal = () => {
    return "some";
  };

  return (
    <>
      {/* <p>Counter value is: {counter}</p> */}
      <p>{data}</p>
      {/* <button className="increment" onClick={incCounter}>
        Up
      </button> */}
    </>
  );
}

export default TestComp;
