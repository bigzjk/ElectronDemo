import { GModule, createDecorator } from './mods/GModule';

export const IMyServer = createDecorator<MyServer>('mod.myServer');

export interface IMyServer {
    add(): void;
    _count: number
    get count(): number;
}

export class MyServer extends GModule implements IMyServer {
    _count = 1;

    get count() {
        return this._count;
    }
    add() {
        this._count ++;
    }
    
}