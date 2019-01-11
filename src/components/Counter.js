import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";
import fizzBuzzChecker from "../utils/fizzBuzzChecker";
class Counter extends Component {
  render() {
             return <div>
                 <button onClick={this.props.decrement} disabled={this.props.count === 1}>-</button>
                 <p>
                   Current count: {fizzBuzzChecker(this.props.count)}
                 </p>
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
