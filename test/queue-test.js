const chai = require('chai');
const assert = chai.assert;

const { Queue } = require("../classes/queue");

let newQueue = new Queue();

describe('Check Queue Methods: ', function(){
    it('Check the Offer method using : assert.equal(value, value): ', function(){
        newQueue.offer("Noé");
        newQueue.offer("Alejandro");
        result = newQueue.queue;
        assert.deepEqual(result, ['Noé', 'Alejandro']);
    })

    it('Check the Poll method using : assert.equal(value, value): ', function(){
        newQueue.poll();
        result = newQueue.queue;
        assert.deepEqual(result, ['Alejandro']);
    })

    it('Check the Peek method using : assert.equal(value, value): ', function(){
        newQueue.offer("Juárez");
        result = newQueue.peek();
        assert.deepEqual(result, 'Alejandro');
    })

    it('Check the Length method using : assert.equal(value, value): ', function(){
        result = newQueue.length();
        assert.deepEqual(result, 2);
    })

    it('Check the isEmpty method using : assert.equal(value, value): ', function(){
        result = newQueue.isEmpty();
        assert.deepEqual(result, false);
    })

    it('Check the search method using : assert.equal(value, value): ', function(){
        result = newQueue.search('Juárez');
        assert.deepEqual(result, 1);
    })

})