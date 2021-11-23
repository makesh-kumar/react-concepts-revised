import React, { Component } from "react";
import Click from "./Click";
import Counter from "./Counter";
class RpWithClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      updateCount: null,
    };
  }

  ins = (count, updateCount) => {
    console.log(count, updateCount);
    return <Click count={count} updateCount={updateCount} />;
  };
  render() {
    return (
      <div>
        {/* <Counter
          render={(count, updateCount) => {
            return <Click count={count} updateCount={updateCount} />;
          }}
        /> */}
        <Counter render={this.ins}></Counter>
      </div>
    );
  }
}

export default RpWithClass;
