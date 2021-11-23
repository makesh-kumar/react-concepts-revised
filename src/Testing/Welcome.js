import React, { useState, useEffect } from "react";
import axios from "axios";
function Welcome() {
  const [user, setUser] = useState("");
  const [resp, setResp] = useState("");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  let [count, setCount] = useState(0);

  const decrement = () => setCount((count -= 1));
  const increment = () => setCount((count += 1));

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const data = {
      userName,
      email,
    };
    // const res = { data: { id: "99", title: "SOME" } };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    console.log(">>>>>>>>SETT ", res);
    setUserName(res.data.id);
    setEmail(res.data.id);
  };

  useEffect(() => {
    const getUserData = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/2"
      );
      // console.log(data);
      setUser(data.data.title);
    };
    getUserData();
  }, []);

  const fetchData = async () => {
    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setResp(resp.data.title);
  };

  return (
    <div>
      <h1>Testing React Hooks</h1>
      <p data-testid="countvalue">{count}</p>
      <button data-testid="decrementButton" onClick={decrement}>
        -
      </button>

      <button data-testid="incrementButton" onClick={increment}>
        +
      </button>

      <p data-testid="userVal">{user}</p>
      <button className="myFetch" onClick={fetchData}>
        FetchData
      </button>
      <h1>{resp}</h1>

      <hr />
      <form onSubmit={onFormSubmit}>
        <div className="formControl">
          <label>User Name</label>
          <input
            id="userName"
            type="text"
            value={userName}
            name="userName"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>

        <div className="formControl">
          <label>Email</label>
          <input
            id="email"
            type="email"
            value={email}
            data-testid="te"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Welcome;
