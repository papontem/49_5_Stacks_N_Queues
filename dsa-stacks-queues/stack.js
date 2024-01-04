/** Node: node for a stack. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Stacks - LAST IN FIRST OUT
 * Make a Stack class.
 * It should include methods for pushing, popping, peeking, and checking if the stack is empty.
 * Make it throw an error if you try to pop from an empty stack.
 *
 * Stack: chained-together nodes where you can remove from the last or add to the last.
 *
 *
 * */

class Stack {
	constructor() {
		this.last = null;
		this.first = null;
		this.size = 0;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		let newNode = new Node(val);
		if (this.size == 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */
	pop() {
		if (this.isEmpty()) {
			throw new Error("Stack is empty");
		}

		let current = this.first;
		// console.log("CURRENT START", current);
		while (current.next.next != null) {
			current = current.next;
			// console.log("CURRENT", current);
		}
		// console.log("CURRENT END", current);
		let result = this.last.val;
		current.next = null;
		this.last = current;
		this.size--;
		return result;
	}

	/** peek(): return the value of the first node going out in the stack. */
	peek() {
		if (this.isEmpty()) {
			return null;
		}
		return this.last.val;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */
	isEmpty() {
		return this.size === 0;
	}
}

module.exports = Stack;
