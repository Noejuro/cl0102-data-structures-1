class Queue {
    #queue = []

    constructor() {}

    get queue()     { return this.#queue; }

    offer(item)      { this.#queue.push(item); }

    poll()           { return this.#queue.shift(); }

    peek()          { return this.#queue[0] }

    length()        { return this.#queue.length; }

    isEmpty()       { return !this.#queue.length; }

    search(item)    { return this.#queue.indexOf(item); }
}

module.exports = { Queue }