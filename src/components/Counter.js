import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";
import fizzBuzzChecker from "../utils/fizzBuzzChecker";
// import Fizz from './Fizz'

class Counter extends Component {
  // makeIncrementer = amount => () =>
  //   this.setState(prevState => {
  //     const newCount = prevState.count + amount

  //     if ( newCount > 1 ) {
  //       return {count: newCount}
  //     }

  //   });

  // increment = this.makeIncrementer(1);
  // decrement = this.makeIncrementer(-1);

  render() {
    return <div>
        <button onClick={this.props.decrement}>-</button>
               <p>Current count: {fizzBuzzChecker(this.props.count)}</p>
        <button onClick={this.props.increment}>+</button>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
