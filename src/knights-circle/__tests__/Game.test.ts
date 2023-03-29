import { Game } from '../Game';

describe('Game', () => {
  describe('constructor', () => {
    it('should create a linked list with the given player names', () => {
      const game = new Game(['Arthur', 'Lancelot', 'Galahad']);

      expect(game.list.length).toBe(3);
      expect(game.list.head!.name).toBe('Arthur');
      expect(game.list.tail!.name).toBe('Galahad');
    });
  });

  describe('simulate', () => {
    it('should eliminate players with zero hp', () => {
      const game = new Game(['Arthur', 'Lancelot']);

      // no matter what Arthur rolls, Lancelot should win
      game.list.head!.hp = 1;
      game.list.tail!.hp = 10;

      game.simulate();

      expect(game.list.length).toBe(1);
      expect(game.getWinner()?.name).toBe('Lancelot');
    });

    it('should return the winning player', () => {
      const game = new Game(['Arthur', 'Lancelot', 'Galahad', 'Bedivere']);

      // mock `Math.random()` to always return 0.5 so that we get
      // deterministic results
      jest.spyOn(Math, 'random').mockReturnValue(0.5);

      // rig the game so that Bedivere is the winner
      game.list.head!.hp = 2;
      game.list.tail!.hp = 10;
      game.list.head!.next!.next!.hp = 0;

      game.simulate();

      expect(game.list.length).toBe(1);
      expect(game.getWinner()?.name).toBe('Bedivere');

      jest.spyOn(Math, 'random').mockRestore();
    });
  });
});
