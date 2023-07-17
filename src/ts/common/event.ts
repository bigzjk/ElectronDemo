import { DisposableStore, IDisposable, SafeDisposable, toDisposable } from "./lifecycle";
import { LinkedList } from "./linkedList";


export interface IEventHandler {
    (...args: any[]): void;
}

/**
 * To an event a function with one or zero parameters
 * can be subscribed. The event is the subscriber function itself.
 */
export interface Event<T> {
	(listener: (e: T) => any, thisArgs?: any, disposables?: IDisposable[] | DisposableStore): IDisposable;
}

function ToEventRemover(dispose: () => void) {
    return toDisposable(dispose);
}


export class Emitter<T extends IEventHandler> {

	// private _disposed: boolean = false;
    _event?: Event<T>;
    _listeners?: LinkedList<Event<T>>;
    _handlers?: LinkedList<T>;
    private dispatchQueue?: LinkedList<T>;


    // get event() {
    //     if (!this._event) {
    //         this._event = (callback: (e: T) => any, thisArgs?: any, disposables?:IDisposable[] | DisposableStore) => {
    //             if (!this._listeners) {
    //                 this._listeners = new LinkedList();
    //             }

    //             let listener = new Listener(callback, thisArgs);
    //             const removeListener = this._listeners.push(listener);

    //             const result = listener.subscription.set(() => {
    //                 if (!this._disposed) {
    //                     removeListener();
    //                 }

    //             })

    //             return result
    //         }

    //     }
    //     return this._event;
    // }

    listen(handler: T) {
        if (!this._handlers) {
            this._handlers = new LinkedList();
        }
        const res = this._handlers.push(handler);
        return ToEventRemover(res);
    }


    fire(...args: Parameters<T>): void {
        if (!this._handlers) return;
        
        if (!this.dispatchQueue) {
            this.dispatchQueue = new LinkedList();
        }

        for (const handler of this._handlers) {
            this.dispatchQueue.push(handler);
        }

        while (this.dispatchQueue.size > 0) {
            const h = this.dispatchQueue.shift()!;
            try {
                h(...args);
            } catch (e) {
                console.error(e);
            }
        }

    }

    dispoable() {
        if (this._handlers) {
            this._handlers.clear();
        }
    }

}

export class Listener<T>{

    readonly subscription = new SafeDisposable();
    constructor (
        readonly callback: (e: T) => void,
		readonly callbackThis: any | undefined,
    ) {
    }

    invoke(e: T) {
        this.callback.call(this.callbackThis, e);
    }
}