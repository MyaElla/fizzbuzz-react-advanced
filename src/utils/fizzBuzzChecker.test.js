import React from "react";
import fizzBuzzChecker from "./fizzBuzzChecker";

describe("Counter component", () => {

    test("display Fizz for multiple of 3", () => {
      expect(fizzBuzzChecker(3)).toBe("Fizz");
      expect(fizzBuzzChecker(9)).toBe("Fizz");
      expect(fizzBuzzChecker(27)).toBe("Fizz");
    });

     test("display Buzz for multiple of 5", () => {
       expect(fizzBuzzChecker(5)).toBe("Buzz");
       expect(fizzBuzzChecker(10)).toBe("Buzz");
       expect(fizzBuzzChecker(20)).toBe("Buzz");
     });

    test("display blank for non multiple of either 3 or 5 ", () => {
      expect(fizzBuzzChecker(7)).toBe("");
      expect(fizzBuzzChecker(19)).toBe("");
    });
});