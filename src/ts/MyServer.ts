import { GModule, createDecorator } from './mods/GModule';
import { Emitter } from './common/event';

export const IMyServer = createDecorator<MyServer>('mod.myServer');

export interface IMyServer {
    add(): void;
    _count: number | string
    get count(): number | string;
}

export class MyServer extends GModule {
    
    constructor(
       
    ) {
        super();
    }

    onEvtCountChanged = new Emitter()
    get OnEvtCountChanged() {
        return this.onEvtCountChanged.listen;
    }

    _count = 'a';

    get count() {
        return this._count;
    }
    add() {
        this._count +='m';
        this.onEvtCountChanged.fire(this._count);
    }

}