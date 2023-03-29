/**
 * Given a binary matrix, find the largest square sub-matrix with all 1s.
 */
export function findLargestSquareSize(samples: number[][]): number {
  // collapse into buckets of sizes
  const sizes = samples.flatMap((row, i) =>
    row.map((cell, j) => {
      let size = 0;

      // 1 indicates the cell is part of a square
      if (cell === 1) {
        // check the next cell diagonally in the row and column
        // if it's also 1, then we can increment the size
        while (samples[i + size - 1]?.[j + size - 1] === 1) {
          size++;
        }

        return size === 0 ? size + 1 : size - 1;
      } else {
        return size;
      }
    })
  );

  // return the largest size
  return Math.max(...sizes);
}
