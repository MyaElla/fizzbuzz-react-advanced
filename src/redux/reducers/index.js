import * as TYPES from "../actions";
import { combineReducers } from "redux";

const count = (state = 0, action) => {
    switch (action.type) {
      case TYPES.INCREASE:
        return state + 1;
      case TYPES.DECREASE:
        return state - 1;
      default:
        return state;
    }
}


const rootReducer = combineReducers({
  count
});

export default rootReducer;
