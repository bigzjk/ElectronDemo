// import { DemoServer } from "./DemoServer";

import { getModName2IdMap, ServiceIdentifier, GModule } from './mods/GModule';
import { GModuleManager } from './mods/GModuleManage';

import { MyServer, IMyServer } from './MyServer';
import { DemoServer, IDemoServer } from './DemoServer';

export class MainClass {
    ServerMap = new Map<ServiceIdentifier<any>, GModule>();

    Init() {
        const mod = getModName2IdMap();

        // contaniner.register(IMyServer, serv)

        GModuleManager.Register(IMyServer, new MyServer());
        GModuleManager.Register(IDemoServer, new DemoServer());

    }
}