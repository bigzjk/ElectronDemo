// import { DemoServer } from "./DemoServer";

import { getModName2IdMap, ServiceIdentifier, GModule } from './mods/GModule';
import { GModuleManager } from './mods/GModuleManage';

import { MyServer, IMyServer } from './MyServer';
import { DemoServer, IDemoServer } from './DemoServer';
import { IShortcutServer } from './Shortcut/ShortcutServer';
import { ShortcutServerRenderer } from './Shortcut/electron-renderer/ShortcutServerRenderer';

export class MainClass {
    ServerMap = new Map<ServiceIdentifier<any>, GModule>();

    Init() {
        const mod = getModName2IdMap();

        GModuleManager.Register(IMyServer, new MyServer());
        GModuleManager.Register(IDemoServer, new DemoServer());

        const shortcutServer = new ShortcutServerRenderer();
        shortcutServer.Init();
        GModuleManager.Register(IShortcutServer, shortcutServer);


    }
}