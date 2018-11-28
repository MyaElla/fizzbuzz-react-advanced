import React, { Component } from "react";
import Fizz from './Fizz'

class Counter extends Component {
  state = {
    count: 0
  };

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount
    }));

  increment = this.makeIncrementer(1);
  decrement = this.makeIncrementer(-1);

  render() {
    return (
      <div>
        <p>Current count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>
          Increment count
        </button>
        <button className="decrement" onClick={this.decrement}>
          Decrement count
        </button>
        <Fizz count={1} />
      </div>
    );
  }
}

export default Counter;

