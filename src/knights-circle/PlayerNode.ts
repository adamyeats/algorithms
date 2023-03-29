import { LinkedListNode } from './LinkedListNode';

/**
 * PlayerNode is a ListNode that contains a hp property for use in the game.
 */
export class PlayerNode extends LinkedListNode<PlayerNode> {
  public hp: number = 10;

  constructor(public name: string = 'Player') {
    super();
  }

  public get eliminated(): boolean {
    return this.hp <= 0;
  }

  public takeDamage(damage: number): void {
    this.hp -= damage;

    if (this.hp < 0) {
      this.hp = 0;
    }
  }
}
