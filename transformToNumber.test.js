import { it, expect } from "vitest";
import { transformToNumber } from "./transformToNumber";

it("should provide a number if number string is provided", () => {
  const stringNumber = "5";
  const result = transformToNumber(stringNumber);
  expect(result).toBeTypeOf("number");
  expect(isNaN(result)).not.toBe(true);
});
