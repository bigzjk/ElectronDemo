import { createDecorator, GModule, MyAnnotation } from './mods/GModule';
import { GModuleManager } from './mods/GModuleManage';
import { IMyServer, MyServer } from './MyServer';

export const IDemoServer = createDecorator<DemoServer>('mod.DemoServer');

export class DemoServer extends GModule {
    _text = 'tesssss';

    @MyAnnotation
    _myServer111!: IMyServer;

    constructor(
        @IMyServer private readonly _myServer: IMyServer,
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
        this._myServer.add();
    }
}