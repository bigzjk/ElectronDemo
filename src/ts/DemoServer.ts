import { createDecorator, GModule, MyAnnotation } from './mods/GModule';
import { GModuleManager } from './mods/GModuleManage';
import { IMyServer, MyServer } from './MyServer';

export const IDemoServer = createDecorator<DemoServer>('mod.DemoServer');

export interface IDemoServer {
    setText(): void;
    setCount(): void;
}


export class DemoServer extends GModule implements IDemoServer {
    _text = 'tesssss';

    @MyAnnotation
    _myServer111!: IMyServer;

    get myServer() {
        return GModuleManager.Get(IMyServer);
    }

    constructor(
        // @IMyServer private readonly _myServer: IMyServer,
    ) {
        super()
    }

    get aa() {
        return GModuleManager.Get(IMyServer)
    }
    get abc() {
        return GModuleManager.get(IMyServer);
    }

    get count() {
        return this.aa._count;
    }

    get text() {
        // return this._text;
        return this.abc
    }
    
    public setText() {
        this._text += 'A';
    }

    public setCount() {
        this.myServer.add();
        // this._myServer.add();
    }
}