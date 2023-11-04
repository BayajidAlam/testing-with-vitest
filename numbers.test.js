import { it, expect } from "vitest";
import { cleanNumbers } from "./numbers";

it("should return an array of number if an array of string numbers is provided", () => {
  const stringNumbers = ["2", "3"];
  const result = cleanNumbers(stringNumbers);
  console.log(result);
  expect(result[0]).toBeTypeOf("number");
});
