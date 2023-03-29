import { LinkedList } from '../LinkedList';
import { PlayerNode } from '../PlayerNode';

describe('LinkedList', () => {
  let linkedList: LinkedList<PlayerNode>;

  beforeEach(() => {
    linkedList = new LinkedList<PlayerNode>();
  });

  it('should have a length of 0 when first created', () => {
    expect(linkedList.length).toBe(0);
  });

  it('should have null head and tail nodes when first created', () => {
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should append a node to an empty list and set it as the head and tail', () => {
    const node = new PlayerNode();

    linkedList.append(node);

    expect(linkedList.length).toBe(1);
    expect(linkedList.head).toBe(node);
    expect(linkedList.tail).toBe(node);
  });

  it('should append a node to the end of the list and update the tail node', () => {
    const node1 = new PlayerNode();
    const node2 = new PlayerNode();
    const node3 = new PlayerNode();

    linkedList.append(node1);
    linkedList.append(node2);
    linkedList.append(node3);

    expect(linkedList.length).toBe(3);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node3);
    expect(linkedList.tail!.next).toBe(node1);
  });

  it('should allow for iteration using a for...of loop', () => {
    const node1 = new PlayerNode('Player 1');
    const node2 = new PlayerNode('Player 2');
    const node3 = new PlayerNode('Player 3');

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
