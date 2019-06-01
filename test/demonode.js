const expect = require('chai').expect;
var demonode = require('../lib/demonode');
describe('Demonode', () => {

    it('should be an object', () => {
       expect(demonode).to.be.an('object');
    });

    describe('.add()', () => {

        it('should be a function', () => {
           expect(demonode.add).to.be.a('function');
        });

        it('should add values', () => {
           expect(demonode.add(1, 2)).to.equal(3);
        });

        it('should throw error when v1 is not a number', () => {
           expect(demonode.add.bind(demonode, 'test', 2)).to.throw('v1 is not a number');
        });

        it('should throw error when v2 is not a number', () => {
            expect(demonode.add.bind(demonode, 1, false)).to.throw('v2 is not a number');
        });

    });

    describe('.sub()', () => {

        it('should be a function', () => {
            expect(demonode.sub).to.be.a('function');
        });

        it('should sub values', () => {
            expect(demonode.sub(3, 2)).to.equal(1);
        });

        it('should throw error when v1 is not a number', () => {
            expect(demonode.sub.bind(demonode, 'test', 2)).to.throw('v1 is not a number');
        });

        it('should throw error when v2 is not a number', () => {
            expect(demonode.sub.bind(demonode, 3, false)).to.throw('v2 is not a number');
        });

    });

});
