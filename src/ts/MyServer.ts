import { GModule, createDecorator } from './mods/GModule';

export const IMyServer = createDecorator<MyServer>('mod.myServer');

export interface IMyServer {
    add(): void;
    _count: number
    get count(): number;
}

import { Disposable } from "./common/lifecycle";

export class MyServer extends Disposable {
    
    // onEvtCountChanged = this._register(new Emit())
    _count = 1;

    get count() {
        return this._count;
    }
    add() {
        this._count ++;
    }

}