import React, { useState, useEffect } from "react";
import axios from "axios";

function Helloh(props) {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("Yes");
  const [resp, setResp] = useState("LL");

  const toggleIt = () => {
    if (msg === "Yes") {
      setMsg("No");
    } else {
      setMsg("Yes");
    }
  };

  const fetchData = async () => {
    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setResp(resp.data);
  };

  // async function fetchUserData(id) {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/" + id
  //   );
  //   // console.log(response);
  //   // setUser(response.title);
  //   setUser((await response.json()).title);
  // }

  //axios version
  async function fetchUserData(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + id
    );
    console.log("Fetched dataaa -> ", response);

    setUser(response.title);
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (props.name) {
    return (
      <div>
        <h1>Hello, {props.name}!</h1>
        <p>{user}</p>
      </div>
    );
  } else {
    return (
      <div>
        <span>Hey, stranger</span>
        <p>{user}</p>
        <button className="myBtn" onClick={toggleIt}>
          ToggleIt
        </button>
        <button className="myFetch" onClick={fetchData}>
          FetchData
        </button>
        <h2>{msg}</h2>
        <h2>{resp}</h2>
      </div>
    );
  }
}

export default Helloh;
