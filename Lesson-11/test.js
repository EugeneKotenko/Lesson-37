const { pow } = require('./src/index.js');

describe('Exponentiation function', () => {
  test('Incorrect base parameter', () => {
    expect(() => pow('2', 3)).toThrow('Incorrect base');
  });
  
  test('Incorrect degree parameter', () => {
    expect(() => pow(2, '3')).toThrow('Incorrect degree');
  });

  test('correctly calculates to a positive power', () => {
    expect(pow(2, 3)).toBe(8);
  });

  test('correctly calculates for power 0', () => {
    expect(pow(5, 0)).toBe(1);
  });

  test('correctly calculates for the negative power', () => {
    expect(pow(3, -2)).toBeCloseTo(1 / 9, 5);
  });

  test('correctly calculates for a negative base', () => {
    expect(pow(-2, 4)).toBe(16);
  });

  test('incorrect non-integer degree', () => {
    expect(() => pow(4, 1.5)).toThrow('Incorrect degree');
  });
});