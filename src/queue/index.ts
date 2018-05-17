import DataStore from "../datastore";

/**
 * Represents a first-in, first-out collection of objects.
 * 
 * @class Queue<T>
 * @template T 
 */
class Queue<T> {

    protected dataStore: DataStore<T>;

    /**
     * Creates an instance of Queue.
     * @param {number} [size=0] 
     * @memberof Queue
     */
    constructor(size = 0) {
        this.dataStore = new DataStore<T>(size);
    }

    /**
     * Adds an object to the end of the Queue.
     * 
     * @param {T} element 
     * @memberof Queue
     */
    public enqueue(element: T): void {
        this.dataStore.add(element);
    }

    /**
     * Removes and returns the object at the beginning of the Queue.
     * 
     * @returns {T} 
     * @memberof Queue
     */
    public dequeue(): T {
        var pos = 0;
        const item = this.dataStore.getElement(pos);
        this.dataStore.removeAt(pos);
        return item;
    }

    /**
     * Returns the object at the beginning of the Queue without removing it.
     * 
     * @returns {T} 
     * @memberof Queue
     */
    public peek(): T {
        var pos = 0;
        return this.dataStore.getElement(pos);
    }

    /**
     * returns size of collection
     * 
     * @returns {number} 
     * @memberof Queue
     */
    public length(): number {
        return this.dataStore.length();
    }

    /**
     * clear data
     * 
     * @returns {boolean} 
     * @memberof Queue
     */
    public clear(): void {
        this.dataStore.clear()
    }
    /**
     * returns collection empty or not.
     * 
     * @returns {boolean} 
     * @memberof Queue
     */
    public isEmpty(): boolean {
        return this.dataStore.isEmpty();
    }
}

export default Queue;