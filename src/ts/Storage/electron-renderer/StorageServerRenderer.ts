import { ipcRenderer } from "electron";
import { IStorageData, IStorageServer } from "../StorageServer";
import { GModule } from "../../mods/GModule";

export class StorageServerRenderer extends GModule implements IStorageServer {
    Set<T extends keyof IStorageData>(key: T, value: IStorageData[T]): void {
        ipcRenderer.invoke('store.set', key, value);
    }

    Get<T extends keyof IStorageData>(key: T, defalutValue?: string) {
        let res = ipcRenderer.sendSync('store.get', key, defalutValue);
        return res || defalutValue;
    }


}