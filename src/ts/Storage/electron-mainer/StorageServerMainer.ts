import { ipcMain } from 'electron';
import Store from 'electron-store';
import { IStorageServer } from '../StorageServer';
import { GModule } from '../../mods/GModule';

export class StorageServerMainer extends GModule implements IStorageServer {
    
    private _myStore: Store;
    constructor() {
        super();
        this._myStore = new Store();

        ipcMain.handle('store.set', (e, key, value) => {
            console.log('set---', key, value);
            this.Set(key, value);
            
        })
        ipcMain.on('store.get', (e, key) => {
            console.log('get---', key);
            e.returnValue = this.Get(key);
            
        })
    }

    Set(key: string, value: string) {
        this._myStore.set(key, value); 
    }

    Get(key: string) {
        return this._myStore.get(key);
    }
}