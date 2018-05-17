import DataStore from "../datastore";

/**
 * Represents a first-in, first-out collection of objects.
 * 
 * @class Queue
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
    public enqueue(element: T) {
        throw "Not implemented.";
    }

    /**
     * Removes and returns the object at the beginning of the Queue.
     * 
     * @returns {T} 
     * @memberof Queue
     */
    public dequeue(): T {
        throw "Not implemented.";
    }

    /**
     * Returns the object at the beginning of the Queue without removing it.
     * 
     * @returns {T} 
     * @memberof Queue
     */
    public peek(): T {
        throw "Not implemented.";
    }

    /**
     * returns size of collection
     * 
     * @returns {number} 
     * @memberof Queue
     */
    public length(): number {
        throw "Not implemented.";
    }

    /**
     * clear data
     * 
     * @returns {boolean} 
     * @memberof Queue
     */
    public clear(): boolean {
        throw "Not implemented.";
    }
    /**
     * returns collection empty or not.
     * 
     * @returns {boolean} 
     * @memberof Queue
     */
    public isEmpty(): boolean {
        throw "Not implemented.";
    }
}

export default Queue;