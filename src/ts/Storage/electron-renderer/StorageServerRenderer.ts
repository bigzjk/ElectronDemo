import { ipcRenderer } from "electron";
import { IStorageServer } from "../StorageServer";
import { GModule } from "../../mods/GModule";

export class StorageServerRenderer extends GModule implements IStorageServer {
    Set(key: string, value: string): void {
        console.log('klkk', key, value);
        ipcRenderer.invoke('store.set', key, value);
    }

    Get(key: string) {
        let res = ipcRenderer.sendSync('store.get', key);
        console.log('res---', res);
        return res;
    }
}