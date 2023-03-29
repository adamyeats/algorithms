/**
 * Check if a number is likely to be prime using Fermat's algorithm.
 */
export function fermatIsPrime(num: number, iter: number = 5): boolean {
  // Base cases: 2 and 3 are prime, 1 and even numbers are not.
  if (num === 2 || num === 3) return true;
  if (num <= 1 || num % 2 === 0) return false;

  // Fermat's algorithm: repeat `iter` times
  for (let i = 0; i < iter; i++) {
    // Choose a random number between 2 and `num-1`.
    const a = Math.floor(Math.random() * (num - 2)) + 2;

    // Check whether `a` and `num` are coprime (have a gcd of 1).
    if (gcd(a, num) !== 1) return false;

    // Check whether `a^(num-1) ≡ 1 (mod num)`.
    if (modPow(a, num - 1, num) !== 1) return false;
  }

  // If `num` passes all `iter` iterations, it's likely to be prime.
  return true;
}

/**
 * Calculate the greatest common divisor of two numbers using the Euclidean algorithm.
 */
function gcd(a: number, b: number): number {
  // Base case: if `b` is 0, `a` is the gcd of `a` and `b`.
  if (b === 0) return a;

  // Recursive case: `a` and `b` have the same gcd as `b` and `a%b`.
  return gcd(b, a % b);
}

/**
 * Calculate `base^exp (mod mod)` using modular exponentiation.
 */
function modPow(base: number, exp: number, mod: number): number {
  // Base case: if `exp` is 0, `base^exp ≡ 1 (mod mod)`.
  if (exp === 0) return 1;

  // Recursive case 1: if `exp` is even, use `base^(exp/2)` and square the result.
  if (exp % 2 === 0) {
    const temp = modPow(base, exp / 2, mod);
    return (temp * temp) % mod;
  }

  // Recursive case 2: if `exp` is odd, use `base^(exp-1)` and multiply by `base`.
  return (base * modPow(base, exp - 1, mod)) % mod;
}
