export interface ILinkedListNode<T> {
  element: T;
  next: ILinkedListNode<T>;
}
/**
 * Specifies the element type of the linked list.
 *
 * @class LinkedList
 * @template T
 */
class LinkedList<T> {
  protected fist: ILinkedListNode<T>;
  protected last: ILinkedListNode<T>;

  constructor() {}

  /**
   * Adds a new node containing the specified value after the specified existing node in the LinkedList<T>.
   *
   * @param {T} element
   * @param {number} [index]
   * @memberof LinkedList
   */
  public add(element: T, index?: number): void {
    throw "Not Implemented";
  }

  /**
   * Removes the first occurrence of the specified value from the LinkedList<T>.
   *
   * @memberof LinkedList
   */
  public remove(): void {
    throw "Not Implemented";
  }

  /**
   * returns True if collection is empty.
   *
   * @returns {boolean}
   * @memberof LinkedList
   */
  public isEmpty(): boolean {
    throw "Not Implemented";
  }

  /**
   * Gets the number of nodes actually contained in the LinkedList<T>.
   *
   * @returns {number}
   * @memberof LinkedList
   */
  public size(): number {
    throw "Not Implemented";
  }

  /**
   * Removes all nodes from the LinkedList<T>.
   *
   * @memberof LinkedList
   */
  public clear(): void {
    throw "Not Implemented";
  }

  public getName(): string {
    return "LinkedList<T>";
  }
}

export default LinkedList;
