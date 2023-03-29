/**
 * LinkedListNode is a generic class that can be used to create a linked list.
 */
export class LinkedListNode<T extends LinkedListNode<T>> {
  public next: T | null = null;
}
