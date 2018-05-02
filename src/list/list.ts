// ADT from http://www.doc.ic.ac.uk/~ar3/lectures/ProgrammingII/LargePrintOut/Lecture2PrintOut.pdf

class List<T> {
    constructor() {

    }

    items: Array<T> = [];
    // length:Number = -1;

    /**
     * operation to add data to a List
     * 
     * @param {Number} index 
     * @param {any} T 
     * @returns {T} 
     * @memberof List
     */
    add(index: number, item:T): void {

        if (index < 0) {
            //TODO: change to global Error definitions.
            throw "Out of Bound.";
        }

        if (index > this.items.length) {
            var delta: number = 0;
            delta = (index - this.items.length);
            while (delta--) {
                this.items.push(null);
            }
            this.items[index] = item;

        } else {
            // extend list
            // shift items to next

            // save last
            var last:T = this.items[this.items.length -1];
            this.items.push(null);
            const length = this.items.length;

            for (var position:number = index; position < length; position++) {
                var next:T = this.items[position];
                this.items[position+1] = next;
            }
            this.items[index] = item;
            this.items[this.items.length -1] = last;
        }
    }

    /**
     * operation to delete a data item from a List
     * 
     * @param {any} index 
     * @returns {T} 
     * @memberof List
     */
    remove(index): T {
        throw "Not Implemented";
    }

    /**
     * to test whether the List is empty
     * 
     * @returns {T} 
     * @memberof List
     */
    isEmpty(): Boolean {
        throw "Not Implemented";
    }

    /**
     * t to return one item at a particular position. 
     * 
     * @param {any} index 
     * @returns {T} 
     * @memberof List
     */
    get(index:number): T {
        //TODO: implements bound
        return this.items[index];
    }

    size(): number {
        throw "Not Implemented";
    }

    print(): void {
        for (var index:number = 0; index < this.items.length; index++) {
            const element = this.items[index];
            global.console.log('index %d, value %s', index, element);
        }
    }

    getName(): string {
        return 'List<T>';
    };
};

export default List;