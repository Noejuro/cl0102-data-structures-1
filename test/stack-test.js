const chai = require('chai');
const assert = chai.assert;

const { Stack } = require("../classes/stack");

let newStack = new Stack();

describe('Check Stack Methods: ', function(){
    it('Check the Push method using : assert.equal(value, value): ', function(){
        newStack.push("Noé");
        newStack.push("Alejandro");
        result = newStack.stack;
        assert.deepEqual(result, ['Noé', 'Alejandro']);
    })

    it('Check the Pop method using : assert.equal(value, value): ', function(){
        newStack.pop();
        result = newStack.stack;
        assert.deepEqual(result, ['Noé']);
    })

    it('Check the Peek method using : assert.equal(value, value): ', function(){
        newStack.push("Juárez");
        result = newStack.peek();
        assert.deepEqual(result, 'Juárez');
    })

    it('Check the Length method using : assert.equal(value, value): ', function(){
        result = newStack.length();
        assert.deepEqual(result, 2);
    })

    it('Check the isEmpty method using : assert.equal(value, value): ', function(){
        result = newStack.isEmpty();
        assert.deepEqual(result, false);
    })

    it('Check the search method using : assert.equal(value, value): ', function(){
        result = newStack.search('Juárez');
        assert.deepEqual(result, 1);
    })

})