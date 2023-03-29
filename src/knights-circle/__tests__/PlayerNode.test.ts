import { PlayerNode } from '../PlayerNode';

describe('PlayerNode', () => {
  it('should have a default `hp` of 10', () => {
    const player = new PlayerNode();
    expect(player.hp).toBe(10);
  });

  it('should have a `name` property that defaults to "Player"', () => {
    const player = new PlayerNode();
    expect(player.name).toBe('Player');
  });

  it('should allow the `name` property to be set', () => {
    const name = 'Arthur';
    const player = new PlayerNode(name);
    expect(player.name).toBe(name);
  });

  it('should have an `eliminated` property that returns true when `hp` is 0 or less', () => {
    const player = new PlayerNode();
    expect(player.eliminated).toBe(false);
    player.takeDamage(10);
    expect(player.eliminated).toBe(true);
  });

  it('should reduce `hp` when `takeDamage` is called', () => {
    const player = new PlayerNode();
    player.takeDamage(3);
    expect(player.hp).toBe(7);
  });

  it('should not allow `hp` to go below 0 when `takeDamage` is called', () => {
    const player = new PlayerNode();
    player.takeDamage(100);
    expect(player.hp).toBe(0);
  });
});
