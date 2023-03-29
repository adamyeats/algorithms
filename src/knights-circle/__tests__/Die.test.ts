import { Die } from '../Die';

describe('Die', () => {
  it('should return a number between 1 and 6', () => {
    const roll = Die.roll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
  });
});
