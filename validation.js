export function validateStringNotEmpty(value) {
  if (value.trim().length == 0) {
    throw new Error("input cannot be empty");
  }
}
export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error("Invalid number input");
  }
}

export function validateEmail(email) {
  const emailRegex = /\s+@\s+\.\s+/;
  if (emailRegex.test(email)) {
    throw new Error("Invalid email Address");
  }
}

export function validateArrayNotEmpty(arr) {
  if (!Array.isArray(arr) || arr.length == 0) {
    throw new Error("array can not be empty");
  }
}
