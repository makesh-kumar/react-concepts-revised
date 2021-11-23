import React, { useEffect, useState } from "react";
import axios from "axios";

function useCounter(id) {
  const [data, updateData] = useState({});

  useEffect(() => {
    console.log("in useEfff");
    axios
      .get("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((data) => {
        console.log(data);
        updateData(data.data);
      });
  }, []);

  return data;
}

export default useCounter;
