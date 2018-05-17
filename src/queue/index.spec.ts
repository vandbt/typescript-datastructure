import { expect } from "chai";
// if you used the "@types/mocha" method to install mocha type definitions, uncomment the following line
import "mocha";

import Queue from "./index";

describe("Queue", function () {

    var myQueue;

    describe("#enqueue()", function () {

        it("should peek return [test] when the [test] enqueued", function () {
            myQueue = new Queue<String>();
            myQueue.enqueue("test");
            expect(myQueue.peek()).equal("test");
        });

        it("should peek return 0 when the 10 elements enqueued", function () {
            myQueue = new Queue<Number>();

            for (var index = 0; index < 10; index++) {
                var elem = index;
                myQueue.enqueue(elem);
            }

            expect(myQueue.peek()).equal(0);
        });
    });

    describe("#dequeue()", function () {

        it("should throws Error [Queue is empty.] when dequeue empty queue", function () {
            myQueue = new Queue<String>();
            expect(myQueue.dequeue).throws();
        });

        it("should dequeue return dequeueTest when the dequeueTest enqueued", function () {
            myQueue = new Queue<String>();
            myQueue.enqueue("dequeueTest");
            expect(myQueue.dequeue()).equal("dequeueTest");
        });

        describe("#dequeue(): The quick brown fox", function () {
            // Creates and initializes a new Queue.
            before(function () {
                myQueue = new Queue<String>();
                myQueue.enqueue("The");
                myQueue.enqueue("quick");
                myQueue.enqueue("brown");
                myQueue.enqueue("fox");
            });

            it("should dequeue return [The] when dequeued", function (done) {
                expect(myQueue.dequeue()).equal("The");
                done();
            });
            it("should dequeue return [quick] when dequeued", function (done) {
                expect(myQueue.dequeue()).equal("quick");
                done();
            });
            it("should dequeue return [brown] when dequeued", function (done) {
                expect(myQueue.dequeue()).equal("brown");
                done();
            });
            it("should dequeue return [fox] when dequeued", function (done) {
                expect(myQueue.dequeue()).equal("fox");
                done();
            });
        });

    });


    describe("#isEmpty()", function () {

        it("should return true when queue is empty", function () {
            myQueue = new Queue<String>();
            expect(myQueue.isEmpty()).equal(true);
        });

        it("should return false when queue is not empty", function () {
            myQueue = new Queue<String>();
            myQueue.enqueue(0);
            expect(myQueue.isEmpty()).equal(false);
        });

    });

    describe("#length()", function () {

        it("should return 0 when queue is empty", function () {
            myQueue = new Queue<String>();
            expect(myQueue.length()).equal(0);
        });

        it("should return 1 when queue has one item", function () {
            myQueue = new Queue<String>();
            myQueue.enqueue(0);
            expect(myQueue.length()).equal(1);
        });

    });

    describe("#clear()", function () {

        it("should return true when queue called clear", function () {
            myQueue = new Queue<String>();
            myQueue.enqueue(0);
            myQueue.clear();
            expect(myQueue.isEmpty()).equal(true);
        });

        it("should return size 0 when queue called clear", function () {
            myQueue = new Queue<String>();
            myQueue.enqueue(0);
            myQueue.clear();
            expect(myQueue.length()).equal(0);
        });

    });

});