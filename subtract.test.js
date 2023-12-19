const subtract = require('./subtract');

it('should return the subtraction of two positive integers', () => {
    expect(subtract(4, 3)).toBe(1);
});