class NodeA<E> {
    static readonly Undefined = new NodeA<any>(undefined);

    element: E;
    prev: NodeA<E>;
    next: NodeA<E>;

    constructor(element: E) {
        this.element = element;
		this.next = NodeA.Undefined;
		this.prev = NodeA.Undefined;
    }
}

export class LinkedList<E> {
    _first: NodeA<E> = NodeA.Undefined;
    _last: NodeA<E> = NodeA.Undefined;
    _size = 0;

    get size() {
        return this._size;
    }

    isEmpty() {
        return this._first === NodeA.Undefined;
    }
    
    push(element: E) {
        return this._insert(element, true);
    }

    clear(): void {
		let node = this._first;
		while (node !== NodeA.Undefined) {
			const next = node.next;
			node.prev = NodeA.Undefined;
			node.next = NodeA.Undefined;
			node = next;
		}

		this._first = NodeA.Undefined;
		this._last = NodeA.Undefined;
		this._size = 0;
	}

	unshift(element: E): () => void {
		return this._insert(element, false);
	}

    _insert(element: E, atTheEnd: boolean) {
        const newNode = new NodeA<E>(element);
        if (this._first === NodeA.Undefined) {
            this._first = newNode;
            this._last = newNode;
        } else if (atTheEnd) {
            const oldNode = this._last;
            this._last = newNode;
            newNode.prev = oldNode;
            oldNode.next = newNode;
        } else {
            const oldNode = this._first;
            this._first = newNode;
            newNode.next = oldNode;
            oldNode.prev = newNode;
        }
        this._size += 1;
        let didRemove = false;
        return () => {
            if (!didRemove) {
                didRemove = true;
                this._remove(newNode)
            }
        }
    }

    shift(): E | undefined {
		if (this._first === NodeA.Undefined) {
			return undefined;
		} else {
			const res = this._first.element;
			this._remove(this._first);
			return res;
		}
	}

	pop(): E | undefined {
		if (this._last === NodeA.Undefined) {
			return undefined;
		} else {
			const res = this._last.element;
			this._remove(this._last);
			return res;
		}
	}


    _remove(node: NodeA<E>) {
        if (node.prev !== NodeA.Undefined && node.next !== NodeA.Undefined) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        } else if (node.prev == NodeA.Undefined && node.next === NodeA.Undefined) {
            this._last = NodeA.Undefined;
            this._first = NodeA.Undefined;

        } else if (node.prev == NodeA.Undefined){
            this._first = node.next;
            this._first.prev = NodeA.Undefined;
        } else if (node.next === NodeA.Undefined) {
            this._last = node.prev;
            this._last.next = NodeA.Undefined;
        }

        this._size -= 1;


    }

    *[Symbol.iterator](): Iterator<E> {
        let node = this._first;
        while (node !== NodeA.Undefined) {
            yield node.element;
            node = node.next;
        }
    }


}