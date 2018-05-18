import LinkedList from './index';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

describe('LinkedList<T>', () => {

    describe('#getName()', () => {
        it('should return name LinkedList<T>', () => {
            let list = new LinkedList<number>();

            expect(list.getName()).to.equal('LinkedList<T>');
        });
    });

    describe('#add()', () => {

        let list;
        before(() => {
            list = new LinkedList<number>();
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
            expect(list.get(11)).to.equal(10);
        });

        it('should return size 12 when size()', () => {
            expect(list.size()).to.equal(12);
        });

        it('should throw when get out of bound index', () => {
            expect(() => list.get(100)).to.throw();
        });
    });




    describe('#remove()', () => {

        let list;
        before(() => {
            list = new LinkedList<string>();
            list.add(0, 'Aa');
            list.add(1, 'Bb');
            list.add(2, 'Cc');
            list.add(3, 'Dd');
            list.add(4, 'Ee');
            list.add(5, 'Ff');
            list.add(6, 'Gg');
            list.add(7, 'Hh');
            list.add(8, 'Ii');
            list.add(9, 'Jj');

        });

        it('should size return 9 when remove index 9', (done) => {

            list.remove(9);
            expect(list.size()).to.equal(9);
            done();
        });

        it('should size return 8 when remove index 8', (done) => {
            list.remove(8);

            expect(list.size()).to.equal(8);
            done();
        });

    });


    describe('#isEmpty()', () => {

        let list;
        before(() => {
            list = new LinkedList<string>();
            list.add(0, 'A');
        });

        it('should return false when LinkedList has items', () => {
            expect(list.isEmpty()).to.equal(false);
        });

        it('should return true when LinkedList has no items', () => {
            list.remove(0);
            expect(list.isEmpty()).to.equal(true);
        });

    });

    describe('#size()', () => {

        let list;
        before(() => {
            list = new LinkedList<string>();
            
        });

        it('should return 0 when LinkedList is empty', (done) => {
            expect(list.size()).to.equal(0);
            done();
        });

        it('should return 10 when LinkedList has 10 items', (done) => {
            list.add(0, 'a');
            list.add(1, 'b');
            list.add(2, 'c');
            list.add(3, 'd');
            list.add(4, 'e');
            list.add(5, 'f');
            list.add(6, 'g');
            list.add(7, 'h');
            list.add(8, 'i');
            list.add(9, 'j');
            
            expect(list.size()).to.equal(10);
            done();
        });
    });

});