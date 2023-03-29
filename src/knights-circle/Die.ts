/**
 * Die is a class that simulates a die.
 */
export class Die {
  static roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
