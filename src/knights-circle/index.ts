import { Game } from './Game';

function main(): void {
  const game = new Game([
    'Arthur',
    'Lancelot',
    'Galahad',
    'Bedivere',
    'Percival',
    'Mordred'
  ]);

  while (game.list.length > 1) {
    game.simulate();
  }

  const winner = game.getWinner();

  console.log(`Winner: ${winner ? winner.name : 'none'}`);
}

main();
