// ADT from http://www.doc.ic.ac.uk/~ar3/lectures/ProgrammingII/LargePrintOut/Lecture2PrintOut.pdf

class List<T> {
    private items: T[];
    constructor() {
        this.items = new Array<T>();
        this.items.length = 0;
    }

    /**
     * operation to add data to a List
     * 
     * @param {Number} index 
     * @param {any} T 
     * @returns {T} 
     * @memberof List
     */
    add(index: number, item: T): void {

        if (index < 0) {
            throw "Out of Bound.";
        }

        if (index >= this.items.length) {
            var delta: number = 0;
            delta = (index - this.items.length);

            var len = this.items.length;
            for (len; len < index; len++) {
                this.items.push(null);
            }

            this.items[index] = item;

        } else {
            // extend list
            // shift items to next

            // save last
            var last: T = this.items[this.items.length - 1];
            this.items.push(null);
            const len = this.items.length -1;

            for (var position: number = index; position < len; position++) {
                var next: T = this.items[position];
                this.items[position + 1] = next;
            }
            this.items[index] = item;
            this.items[this.items.length - 1] = last;
        }
    }

    /**
     * operation to delete a data item from a List
     * 
     * @param {any} index 
     * @returns {T} 
     * @memberof List
     */
    remove(index): void {
        if (index < 0 || index > this.size()) {
            throw 'Out of bound';
        }

        var len: number = this.items.length;
        if (!len) {
            return;
        }

        while (index < len) {
            this.items[index] = this.items[index + 1];
            index++;
        }

        this.items.length--;
    }

    /**
     * to test whether the List is empty
     * 
     * @returns {T} 
     * @memberof List
     */
    isEmpty(): Boolean {
        return this.size() == 0 ? true : false;
    }

    /**
     * t to return one item at a particular position. 
     * 
     * @param {any} index 
     * @returns {T} 
     * @memberof List
     */
    get(index: number): T {
        if (index < 0 || index > this.size()) {
            throw 'Out of bound';
        }

        return this.items[index];
    }

    size(): number {
        return this.items.length;
    }

    print(): void {
        for (var index: number = 0; index < this.items.length; index++) {
            const element = this.items[index];
            global.console.log('index %d, value %s', index, element);
        }
    }

    getName(): string {
        return 'List<T>';
    }
};

export default List;