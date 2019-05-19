import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Counter!</div>
        <div className="panel-body text-center">
          <p>Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
