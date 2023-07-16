import { DisposableStore, IDisposable, SafeDisposable } from "./lifecycle";

/**
 * To an event a function with one or zero parameters
 * can be subscribed. The event is the subscriber function itself.
 */
export interface Event<T> {
	(listener: (e: T) => any, thisArgs?: any, disposables?: IDisposable[] | DisposableStore): IDisposable;
}


export class Emitter<T> {

    _event?: Event<T>;
    _listener: 

    get event() {
        if (!this._event) {
            this._event = (callback: (e: T) => any, thisArgs?: any, disposables?:IDisposable[] | DisposableStore) => {


                return null;
            }

        }
        return this._event;
    }
    fire() {}

    dispoable() {}

}

export class Listene<T>{

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