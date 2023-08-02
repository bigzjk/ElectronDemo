import { BrowserWindow, ipcMain } from 'electron';
import Store from 'electron-store';
import { IStorageData, IStorageServer } from '../StorageServer';
import { GModule } from '../../mods/GModule';
import { Emitter } from '../../common/event';

export class StorageServerMainer extends GModule implements IStorageServer {
    
    private _myStore: Store;
    constructor(mainWindow: BrowserWindow ) {
        super();
        this._myStore = new Store({
            fileExtension: 'eljson'
        });

        ipcMain.handle('store.set', (e, key, value) => {
            this.Set(key, value);
            
        })

        ipcMain.on('store.get', (e, key) => {
            e.returnValue = this.Get(key);
            
        })

        this._myStore.onDidChange('aaa', (nv, ov) => {
            console.log('---', nv, ov);
            
        })
        this._myStore.onDidAnyChange((newValue, oldValue) => {
            mainWindow.webContents.send('store.any.change', newValue, oldValue)
        })
    }

    Set<T extends keyof IStorageData>(key: T, value: IStorageData[T]) {
        this._myStore.set(key, value); 
    }

    Get<T extends keyof IStorageData>(key: T, defalutValue?: string): IStorageData[T] {
        const res = this._myStore.get(key, defalutValue);
        return res as any;
    }
}