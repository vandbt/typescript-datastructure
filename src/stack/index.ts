import DataStore from "../datastore";

/**
 * Stack generic data structure
 *
 * @class Stack
 * @template T
 */
class Stack<T> {
  data: DataStore<T>;
  constructor() {
    this.data = new DataStore<T>();
  }

  public clear(): void {
    this.data.clear();
  }

  public isEmpty(): boolean {
    return this.data.isEmpty();
  }

  public search(element: T): number {
    const index = this.data.find(element);
    return index < 0 ? -1 : this.data.length() - 1 - index;
  }

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error("The stack is empty");
    }
    return this.data.getElement(this.data.length() - 1);
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error("The stack is empty");
    }

    const lastIndex = this.data.length() - 1;
    const lastElem = this.peek();
    this.data.removeAt(lastIndex);

    return lastElem;
  }

  public push(element: T): Stack<T> {
    this.data.add(element);
    return this;
  }

  public size(): number {
    return this.data.length();
  }
  public getName(): string {
    return "Stack<T>";
  }
}

export default Stack;
