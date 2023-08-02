import { ipcRenderer } from "electron";
import { IStorageData, IStorageServer } from "../StorageServer";
import { GModule } from "../../mods/GModule";
import { Emitter } from "../../common/event";

export class StorageServerRenderer extends GModule implements IStorageServer {
    constructor() {
        super();
        ipcRenderer.on('store.any.change', (e, newValue, oldValue) => {
            console.log('111', newValue, oldValue);
            this.onEvtStoreAnyChanged.fire(newValue, oldValue);
        } )
    }

    onEvtStoreAnyChanged = new Emitter();
    get OnEvtStoreAnyChanged() {
        return this.onEvtStoreAnyChanged.listen;
    }

    Set<T extends keyof IStorageData>(key: T, value: IStorageData[T]): void {
        ipcRenderer.invoke('store.set', key, value);
    }

    Get<T extends keyof IStorageData>(key: T, defalutValue?: string) {
        let res = ipcRenderer.sendSync('store.get', key, defalutValue);
        return res || defalutValue;
    }


}