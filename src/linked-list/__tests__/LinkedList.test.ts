import { LinkedList } from '../LinkedList';
import { LinkedListNode } from '../LinkedListNode';

describe('LinkedList', () => {
  let linkedList: LinkedList<LinkedListNode<any>>;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should have a length of 0 when first created', () => {
    expect(linkedList.length).toBe(0);
  });

  it('should have null head and tail nodes when first created', () => {
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should append a node to an empty list and set it as the head and tail', () => {
    const node = new LinkedListNode();

    linkedList.append(node);

    expect(linkedList.length).toBe(1);
    expect(linkedList.head).toBe(node);
    expect(linkedList.tail).toBe(node);
  });

  it('should append a node to the end of the list and update the tail node', () => {
    const node1 = new LinkedListNode();
    const node2 = new LinkedListNode();
    const node3 = new LinkedListNode();

    linkedList.append(node1);
    linkedList.append(node2);
    linkedList.append(node3);

    expect(linkedList.length).toBe(3);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node3);
    expect(linkedList.tail!.next).toBe(node1);
  });

  it('should allow for iteration using a for...of loop', () => {
    const node1 = new LinkedListNode();
    const node2 = new LinkedListNode();
    const node3 = new LinkedListNode();

    linkedList.append(node1);
    linkedList.append(node2);
    linkedList.append(node3);

    let i = 0;

    for (const node of linkedList) {
      switch (i) {
        case 0:
          expect(node).toBe(node1);
          break;
        case 1:
          expect(node).toBe(node2);
          break;
        case 2:
          expect(node).toBe(node3);
          break;
      }

      i++;
    }
  });
});
