const chai = require('chai');
const assert = chai.assert;

const { Queue } = require("../classes/queue");

let newQueue = new Queue();

describe('Testing Queue Class: ', function(){
    describe('Check Offer Method: ', function(){
        it('Check the queue values using : assert.equal(value, value): ', function(){
            newQueue.offer("Noé");
            result = newQueue.queue;
            assert.deepEqual(result, ['Noé']);
        })
    })
})