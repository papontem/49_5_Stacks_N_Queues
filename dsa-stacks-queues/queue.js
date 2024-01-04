/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Queues - FIRST IN FIRST OUT
 * Make a Queue class.
 * It should include methods for enqueuing, dequeuing, peeking, and checking if the queue is empty.
 * Make it throw an error if you try to dequeue from an empty queue.
 *
 * Queue: chained-together nodes where you can remove from the front or add to the back.
 *
 *
 */
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		const newNode = new Node(val);

		if (this.isEmpty()) {
			this.first = newNode;

			this.last = newNode;
		} else {
			this.last.next = newNode;

			this.last = newNode;
		}

		this.size++;
	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		let result;

		if (this.isEmpty()) {
			throw new Error("QUEUE IS EMPTY!!!!");
		} else {
			result = this.first;
			this.first = this.first.next;
		}

		this.size--;

		return result.val;
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {
		if (this.isEmpty()) {
			return null;
		}
		return this.first.val;
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		if (this.size == 0 && !this.first) {
			return true;
		}
		return false;
	}
}

module.exports = Queue;
