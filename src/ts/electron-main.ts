// import { DemoServer } from "./DemoServer";

import { getModName2IdMap, ServiceIdentifier, GModule } from './mods/GModule';
import { GModuleManager } from './mods/GModuleManage';

import { IShortcutServer } from './Shortcut/ShortcutServer';
import { ShortcutServerMainer } from './Shortcut/electron-mainer/ShortcutServerMainer';

import { IStorageServer } from './Storage/StorageServer';
import { StorageServerMainer } from './Storage/electron-mainer/StorageServerMainer';
import { BrowserWindow } from 'electron';

export class MainClass {
    ServerMap = new Map<ServiceIdentifier<any>, GModule>();

    Init(mainWindow: BrowserWindow ) {
        // const mod = getModName2IdMap();
        const shortcutServer = new ShortcutServerMainer();
        shortcutServer.Init();
        GModuleManager.Register(IShortcutServer, shortcutServer);

        GModuleManager.Register(IStorageServer, new StorageServerMainer(mainWindow));


    }
}