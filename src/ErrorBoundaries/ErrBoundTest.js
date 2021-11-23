import React, { Component } from "react";

class ErrBoundTest extends Component {
  constructor(props) {
    super(props);
    this.setState = "s";
    this.state = {};
  }

  //   componentDidCatch() {
  //     console.log("in ComponentDidCatch");
  //   }

  render() {
    return (
      <div>
        <h2>Error Boundary Example</h2>
      </div>
    );
  }
}

export default ErrBoundTest;
