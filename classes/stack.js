
class Stack {
    #stack = []

    constructor() {}

    get stack()     { return this.#stack; }

    push(item)      { this.#stack.push(item); }

    pop()           { return this.#stack.pop(); }

    peek()          { return this.#stack[this.#stack.length - 1] }

    length()        { return this.#stack.length; }

    isEmpty()       { return !this.#stack.length; }

    search(item)    { return this.#stack.indexOf(item); }
}

module.exports = { Stack }