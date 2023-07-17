// import { DemoServer } from "./DemoServer";
import { Container } from './mods/Container';

import { getModName2IdMap } from './mods/GModule';
import { GModuleManager } from './mods/GModuleManage';

import { MyServer, IMyServer } from './MyServer';
import { DemoServer, IDemoServer } from './DemoServer';

export class MainClass {
    Init() {
        const mod = getModName2IdMap();
        console.log('mod---', mod);
        const contaniner = new Container();

        const serv = new MyServer()


        // contaniner.register(IMyServer, serv)

        GModuleManager.Register(IMyServer, serv);
        GModuleManager.Register(IDemoServer, new DemoServer(serv));

    }
}