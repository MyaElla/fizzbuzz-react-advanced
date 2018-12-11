import React, { Component } from "react";
import {observer} from 'mobx-react';
import store from '../stores/CounterStore.js';
import fizzBuzzChecker from "../utils/fizzBuzzChecker";
// import Fizz from './Fizz'

class Counter extends Component {
  state = {
    count: 1
  };

  makeIncrementer = amount => () =>
    this.setState(prevState => {
      const newCount = prevState.count + amount

      if ( newCount > 1 ) {
        return {count: newCount}
      }

    });

  increment = this.makeIncrementer(1);
  decrement = this.makeIncrementer(-1);

  render() {
    return <div>
        <p>Current count: {fizzBuzzChecker(this.state.count)}</p>
        <button className="decrement" onClick={this.decrement}>
          Decrement count
        </button>
        <button className="increment" onClick={this.increment}>
          Increment count
        </button>
      </div>;
  }
}

export default Counter

// const Counter = () => (
//   <div>
//     <button onClick={() => store.increment()}>+1</button>
//     <span>{store.counter}</span>
//     <button onClick={() => store.decrement()}>-1</button>
//   </div>
// );

// export default observer(Counter);

