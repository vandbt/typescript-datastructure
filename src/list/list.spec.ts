import List from './List';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

describe('List<T>', () => {

    describe('getName function', () => {
        it('should return name List<T>', () => {
            var list = new List<Number>();

            expect(list.getName()).to.equal('List<T>');
        });
    });

    describe('add function', () => {

        var list;
        before(() => {
            list = new List<Number>();
        });

        it('should return 0 when 0 added at index 0', () => {
            list.add(0, 0);

            expect(list.get(0)).to.equal(0);
        });

        it('should return 1 when 1 added at index 1', () => {
            list.add(1, 1);

            expect(list.get(1)).to.equal(1);
        });

        it('should return 10 when 10 added at index 10', () => {
            list.add(10, 10);
            expect(list.get(10)).to.equal(10);
        });

        it('should return 10 when 20 added at index 10 and get(11)', () => {
            list.add(10, 20);
            // expect(list.get(10)).to.equal(20);
            expect(list.get(11)).to.equal(10);
        });
    });


});