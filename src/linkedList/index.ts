export interface ILinkedListNode<T> {
  element: T;
  next: ILinkedListNode<T>;
}

class LinkedListNode<T> implements ILinkedListNode<T> {
  element: T;
  next: ILinkedListNode<T>;
  constructor(elememnt?: T, next?: ILinkedListNode<T>) {
    this.element = elememnt;
    this.next = next || null;
  }
}

/**
 * Specifies the element type of the linked list.
 *
 * @class LinkedList
 * @template T
 */
class LinkedList<T> {
  protected count: number;
  protected firstNode: ILinkedListNode<T>;
  protected lastNode: ILinkedListNode<T>;

  constructor() {
    this.count = 0;
    this.firstNode = null;
    this.lastNode = null;
  }

  /**
   * Adds a new node containing the specified value after the specified existing node in the LinkedList<T>.
   *
   * @param {T} element
   * @param {number} [index]
   * @memberof LinkedList
   */
  public add(element: T, index?: number): void {
    let newNode: ILinkedListNode<T> = new LinkedListNode(element);

    if (index == 0) {
      if (this.firstNode == null) {
        this.firstNode = newNode;
        this.lastNode = newNode;
        // this.firstNode.next = this.lastNode;
      } else {
        this.lastNode.next = newNode;
        this.lastNode = newNode;
      }
    } else {
      let current = this.getNode(index);
      newNode.next = current.next;
      current.next = newNode;
    }

    this.count++;
  }

  /**
   * Removes the first occurrence of the specified value from the LinkedList<T>.
   *
   * @memberof LinkedList
   */
  public remove(index?: number): void {
    let current = this.firstNode;
    let previous = null;
    let pos = 0;

    // removing first item
    if (index == 0) {
      this.firstNode = current.next;
    } else {
      while (pos++ < index) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.count--;
  }

  public removeLast(): void {
    let current = this.firstNode;

    while (current.next != null) {
      if (current.next.next == null) {
        break;
      }
      current = current.next;
    }
    current.next = null;

    this.count--;
  }

  public get(index: number): T {
    return this.getNode(index).element;
  }

  public getNode(index: number): ILinkedListNode<T> {
    let current = this.firstNode;
    while (index != 0) {
      if (current.next == null) {
        break;
      }
      current = current.next;
      index--;
    }
    return current;
  }

  /**
   * returns True if collection is empty.
   *
   * @returns {boolean}
   * @memberof LinkedList
   */
  public isEmpty(): boolean {
    let ret = false;
    if (this.firstNode === null) {
      ret = true;
    }
    return ret;
  }

  /**
   * Gets the number of nodes actually contained in the LinkedList<T>.
   *
   * @returns {number}
   * @memberof LinkedList
   */
  public size(): number {
    return this.count;
  }

  /**
   * Removes all nodes from the LinkedList<T>.
   *
   * @memberof LinkedList
   */
  public clear(): void {
    this.count = 0;
    this.firstNode = null;
    this.lastNode = null;
  }

  public getName(): string {
    return "LinkedList<T>";
  }
}

export default LinkedList;
