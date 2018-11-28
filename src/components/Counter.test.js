import React from "react";
import Counter from "./Counter";
import { shallow } from "enzyme";

describe("Counter component", () => {

  it("starts with a count of 0", () => {
    const wrapper = shallow(<Counter />);
    // one function from enzyme is 'state()' - gets the state of a component
    // const countState = wrapper.state().count
    // expect(countState).toEqual(0)

    // from a user's perspective
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current count: 0");
  });

});
