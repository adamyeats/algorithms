import { LinkedListNode } from '../LinkedListNode';

describe('LinkedListNode', () => {
  it('should set the `next` property to null by default', () => {
    const node = new LinkedListNode();
    expect(node.next).toBeNull();
  });
});
