class DataStore<T> {
  data: T[] = [];
  constructor() {}

  add(elememnt: T): void {
    throw "Not implemented.";
  }
  find(elememnt: T): T {
    throw "Not implemented.";
  }
  remove(elememnt: T): void {
    throw "Not implemented.";
  }
  length(): number {
    throw "Not implemented.";
  }
  toString(): void {
    throw "Not implemented.";
  }
  insert(after: number, elememnt: T): void {
    throw "Not implemented.";
  }
  clear(): void {
    throw "Not implemented.";
  }
  contains(elememnt: T): boolean {
    throw "Not implemented.";
  }
  isEmpty(): boolean {
    throw "Not implemented.";
  }
  getElement(index: number): T {
    throw "Not implemented.";
  }
  getName(): string {
    return "DataStore<T>";
  }
}

export default DataStore;
