import { transformToNumber } from "./transformToNumber";
import { validateNumber, validateStringNotEmpty } from "./validation";

export function cleanNumbers(inputNumbers) {
  const numbers = [];
  for (const inputNumber of inputNumbers) {
    validateStringNotEmpty(inputNumber);
    const number = transformToNumber(inputNumber);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
