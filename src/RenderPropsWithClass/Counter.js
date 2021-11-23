import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateCount = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  render() {
    return <div>{this.props.render(this.state.count, this.updateCount)}</div>;
  }
}

export default Counter;
