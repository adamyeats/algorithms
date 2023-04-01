import { Die } from './Die';
import { PlayerNode } from './PlayerNode';

import { LinkedList } from '../linked-list/LinkedList';

/**
 * Game is a class that simulates the Knights Circle game.
 */
export class Game {
  public list = new LinkedList<PlayerNode>();

  constructor(players: string[]) {
    players.forEach(player => {
      this.list.append(new PlayerNode(player));
    });
  }

  public simulate(): void {
    if (this.list.length === 0) {
      return;
    }

    let current = this.list.head!;
    let previous = this.list.tail!;

    if (current.eliminated) {
      this.list.head = current.next;
      this.list.length--;
    }

    while (current.next !== current) {
      const { next } = current;

      if (current.eliminated) {
        console.log(`${current.name} has been eliminated!`);

        previous.next = next;
        this.list.length--;
      } else {
        next!.takeDamage(Die.roll());
        previous = current;
      }

      current = next!;
    }

    this.list.tail = previous;
  }

  public getWinner(): PlayerNode | null {
    let current = this.list.head;

    while (current?.eliminated) {
      current = current.next;
    }

    return current;
  }
}
