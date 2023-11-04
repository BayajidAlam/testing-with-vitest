import { it, expect } from "vitest";
import { addNumbers } from "./math";

// test scripts
it("should be return the sum of a array if numbers is provided", () => {
  // arrange
  const numbers = [3, 5, 2];
  const expectedResult = numbers.reduce((acc, cur) => acc + cur);

  // action
  const result = addNumbers(numbers);

  // assertion
  expect(result).toBe(expectedResult);
});

it("It should provide NaN if at least one invalid number is provided", () => {
  // arrange
  const numbers = [3, "invalid", 2];

  // action
  const result = addNumbers(numbers);

  // assertion
  expect(result).toBeNaN();
});

it("It should provide correct sum if an array of numeric string is provided", () => {
  // arrange
  const numbers = ["3", "5", "2"];
  const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);

  // action
  const result = addNumbers(numbers);

  // assertion
  expect(result).toBe(expectedResult);
});

it("It should throw an error if no argument is passed", () => {
  const resultFN = () => {
    addNumbers();
  };
  expect(resultFN).toThrow();
});

it("It should throw an error if multiple argument is provided", () => {
  const resultFN = () => {
    addNumbers(1,2,3);
  };
  expect(resultFN).toThrow(/is not iterable/i);
});
