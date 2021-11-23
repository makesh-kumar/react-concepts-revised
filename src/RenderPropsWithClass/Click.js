import React, { Component } from "react";

class Click extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateCount}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default Click;
