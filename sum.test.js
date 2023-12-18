const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('should return the sum of two positive integers', () => {
    expect(sum(2, 3)).toBe(5);
});


it('should return the sum of two negative integers', () => {
    expect(sum(-2, -3)).toBe(-5);
});

// Adding two very large integers may cause overflow
it('should handle overflow when adding two very large integers', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER);
});

// Adding two very small decimal numbers may cause underflow
it('should handle underflow when adding two very small decimal numbers', () => {
    expect(sum(Number.MIN_VALUE, Number.MIN_VALUE)).toBe(Number.MIN_VALUE + Number.MIN_VALUE);
});