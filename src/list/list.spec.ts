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


});