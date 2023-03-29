import { fermatIsPrime } from "..";

describe('fermatIsPrime', () => {
  test('returns true for prime numbers', () => {
    expect(fermatIsPrime(2)).toBe(true);
    expect(fermatIsPrime(3)).toBe(true);
    expect(fermatIsPrime(5)).toBe(true);
    expect(fermatIsPrime(7)).toBe(true);
    expect(fermatIsPrime(11)).toBe(true);
    expect(fermatIsPrime(13)).toBe(true);
    expect(fermatIsPrime(17)).toBe(true);
    expect(fermatIsPrime(19)).toBe(true);
    expect(fermatIsPrime(23)).toBe(true);
    expect(fermatIsPrime(29)).toBe(true);
    expect(fermatIsPrime(31)).toBe(true);
    expect(fermatIsPrime(37)).toBe(true);
  });

  test('returns false for composite numbers', () => {
    expect(fermatIsPrime(1)).toBe(false);
    expect(fermatIsPrime(4)).toBe(false);
    expect(fermatIsPrime(6)).toBe(false);
    expect(fermatIsPrime(8)).toBe(false);
    expect(fermatIsPrime(9)).toBe(false);
    expect(fermatIsPrime(10)).toBe(false);
    expect(fermatIsPrime(12)).toBe(false);
    expect(fermatIsPrime(14)).toBe(false);
    expect(fermatIsPrime(15)).toBe(false);
    expect(fermatIsPrime(20)).toBe(false);
    expect(fermatIsPrime(21)).toBe(false);
    expect(fermatIsPrime(25)).toBe(false);
    expect(fermatIsPrime(27)).toBe(false);
    expect(fermatIsPrime(33)).toBe(false);
  });
});

