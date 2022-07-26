export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export const calculator = {
  add(a, b) {
    return a + b;
  },
};

export function increment(a, b, methods) {
  const result = methods.add(a, b);

  return result;
}
