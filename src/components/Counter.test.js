import React from "react";
import Counter from "./Counter";
import { shallow } from "enzyme";

describe("Counter component", () => {

  it("starts with a count of 1", () => {
    const wrapper = shallow(<Counter />);
    // from a user's perspective - testing the output
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current count: 1");
  });

    it("can increment the count when the button is clicked", () => {
      const wrapper = shallow(<Counter />);
      const incrementBtn = wrapper.find("button.increment");
      incrementBtn.simulate("click");
      const text = wrapper.find("p").text();
      expect(text).toEqual("Current count: 2");
    });

     it("when value is the min 1 and decrement button is clicked count stops at 1", () => {
       const wrapper = shallow(<Counter />);
       const decrementBtn = wrapper.find("button.decrement");
       decrementBtn.simulate("click");
       const text = wrapper.find("p").text();
       expect(text).toEqual("Current count: 1");
     });

});
