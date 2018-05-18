import LinkedList from "./index";
import { expect } from "chai";
// if you used the "@types/mocha" method to install mocha type definitions, uncomment the following line
import "mocha";

describe("LinkedList<T>", () => {

    describe("#getName()", () => {
        it("should return name LinkedList<T>", () => {
            let list = new LinkedList<number>();

            expect(list.getName()).to.equal("LinkedList<T>");
        });
    });

    describe("#add()", () => {

        let list;
        before(() => {
            list = new LinkedList<number>();
        });

        it("should return 0 when 0 added at index 0", () => {
            list.add(0, 0);

            expect(list.get(0)).to.equal(0);
        });

        it("should return 1 when 1 added at index 1", () => {
            list.add(1, 1);

            expect(list.get(1)).to.equal(1);
        });

    });


    describe("#remove()", () => {

        let list;
        before(() => {
            list = new LinkedList<string>();
            list.add("Aa", 0);
            list.add("Bb", 1);
            list.add("Cc", 2);
            list.add("Dd", 3);
            list.add("Ee", 4);
            list.add("Ff", 5);
            list.add("Gg", 6);
            list.add("Hh", 7);
            list.add("Ii", 8);
            list.add("Jj", 9);

        });

        it("should size return 9 when remove index 9", (done) => {

            list.remove(9);
            expect(list.size()).to.equal(9);
            done();
        });

        it("should size return 8 when remove index 8", (done) => {
            list.remove(8);
            expect(list.size()).to.equal(8);
            done();
        });

    });


    describe("#isEmpty()", () => {

        let list;
        before(() => {
            list = new LinkedList<string>();
            list.add("A", 0);
        });

        it("should return false when LinkedList has items", () => {
            expect(list.isEmpty()).to.equal(false);
        });

        it("should return true when LinkedList has no items", () => {
            list.remove(0);
            expect(list.isEmpty()).to.equal(true);
        });

    });

    describe("#size()", () => {

        let list;
        before(() => {
            list = new LinkedList<string>();
            
        });

        it("should return 0 when LinkedList is empty", (done) => {
            expect(list.size()).to.equal(0);
            done();
        });

        it("should return 10 when LinkedList has 10 items", (done) => {
            list.add("Aa", 0);
            list.add("Bb", 1);
            list.add("Cc", 2);
            list.add("Dd", 3);
            list.add("Ee", 4);
            list.add("Ff", 5);
            list.add("Gg", 6);
            list.add("Hh", 7);
            list.add("Ii", 8);
            list.add("Jj", 9);
            
            expect(list.size()).to.equal(10);
            done();
        });
    });

});