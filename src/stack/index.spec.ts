import Stack from './index';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';


describe('Stack<T>', function () {

    var myStack;

    describe('#push()', function () {

        it('should peek return test when the test pushed', function () {
            myStack = new Stack<String>();
            myStack.push('test');
            expect(myStack.peek()).equal('test');
        });

        it('should return 9 when the 10 elements pushed', function () {
            myStack = new Stack<Number>();

            for (var index = 0; index < 10; index++) {
                var elem = index;
                myStack.push(elem);
            }

            expect(myStack.peek()).equal(9);
        });
    });


    describe('#pop()', function () {

        it('should throws Error [Stack overflow] when pop empty stack', function () {
            myStack = new Stack<Number>();
            expect(myStack.pop).to.throw(Error);
        });

        it('should pop return popTest when the popTest pushed', function () {
            myStack = new Stack<String>();
            myStack.push('popTest');
            expect(myStack.pop()).equal('popTest');
        });
        
    });


    describe('#isEmpty()', function () {

        it('should return true when stack is empty', function () {
            myStack = new Stack<Number>();
            expect(myStack.isEmpty()).equal(true);
        });

        it('should return false when stack is not empty', function () {
            myStack = new Stack<Number>();
            myStack.push(0);
            expect(myStack.isEmpty()).equal(false);
        });
        
    });

    describe('#size()', function () {

        it('should return 0 when stack is empty', function () {
            myStack = new Stack<Number>();
            expect(myStack.size()).equal(0);
        });

        it('should return 1 when stack has one item', function () {
            myStack = new Stack<Number>();
            myStack.push(0);
            expect(myStack.size()).equal(1);
        });
        
    });

    describe('#clear()', function () {

        it('should return true when stack called clear', function () {
            myStack = new Stack<Number>();
            myStack.push(0);
            myStack.clear();
            expect(myStack.isEmpty()).equal(true);
        });

        it('should return size 0 when stack called clear', function () {
            myStack = new Stack<Number>();
            myStack.push(0);
            myStack.clear();
            expect(myStack.size()).equal(0);
        });
        
    });


});