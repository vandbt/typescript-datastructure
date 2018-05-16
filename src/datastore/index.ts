class DataStore<T> {
  data: T[] = [];
  constructor(length?: number) {
    this.data.length = length || 0;
  }

  add(element: T): void {
    this.data[this.data.length] = element;
  }
  find(element: T): number {
    var i;
    var len = this.data.length;

    for (i = 0; i < len; i++) {
      if (this.data[i] === element) {
        return i;
      }
    }
    return -1;
  }
  remove(element: T): boolean {
    var pos = this.find(element);

    if (pos > -1) {
      this.data.splice(pos, 1);
      return true;
    }
    return false;
  }
  length(): number {
    return this.data.length;
  }
  toString(separator = ","): string {
    return this.data.join(separator);
  }
  insert(after: number, element: T): boolean {
    if (after > -1 && after < this.length()) {
        this.data.splice(after, 0, element);
        return true;
    } else if (after > -1 && after >= this.length()) {
        this.data[after] = element;
        return true;
    }
    return false;
  }
  clear(): void {
    this.data = [];
    this.data.length = 0;
  }
  contains(element: T): boolean {
    var pos = this.find(element);
    if (pos > -1) {
        return true;
    }
    return false;
  }
  isEmpty(): boolean {
    if (this.data.length === 0) {
        return true;
    }
    return false;
  }
  getElement(index: number): T {
    if (index < 0 || index >= this.length()) {
        throw "Error out of bound";
    }
    return this.data[index];
  }
  getName(): string {
    return "DataStore<T>";
  }
}

export default DataStore;
