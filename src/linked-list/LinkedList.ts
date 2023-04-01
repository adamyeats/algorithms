import { LinkedListNode } from './LinkedListNode';

/**
 * LinkedList is a generic class that can be used to create a linked list.
 */
export class LinkedList<T extends LinkedListNode<T>> {
  public length: number = 0;
  public head: T | null = null;
  public tail: T | null = null;

  public append(node: T): void {
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      node.next = node;
    } else {
      node.next = this.head;
      this.tail!.next = node;
      this.tail = node;
    }

    this.length++;
  }

  // BONUS ITERATOR!!!
  *[Symbol.iterator]() {
    let current = this.head;

    // could also do a forEach here, but I wanted to use a for loop
    // as it's a little more performant and that's probably a good
    // trait for this use case
    for (let i = 0; i < this.length; i++) {
      if (current) {
        yield current;
        current = current.next;
      }
    }
  }
}
