import { findLargestSquareSize } from '..';

describe('findLargestSquareSize', () => {
  test('returns the size of the largest square sub-matrix with all 1s', () => {
    const samples = [
      [1, 0, 0, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 0, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
    ];

    expect(findLargestSquareSize(samples)).toBe(2);
  });

  test('returns 0 if there are no 1s in the matrix', () => {
    const samples = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    expect(findLargestSquareSize(samples)).toBe(0);
  });

  test('returns 1 if the matrix has only one cell with 1', () => {
    const samples = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];

    expect(findLargestSquareSize(samples)).toBe(1);
  });
});
