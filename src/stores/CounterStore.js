import { observable } from "mobx";

class CounterStore {
  @observable counter = 1; // experimentalDecorators option set - warning

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

export default new CounterStore();
