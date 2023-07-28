import { Menu, MenuItem, globalShortcut, ipcMain } from 'electron';

import { ShortcutServer } from "../ShortcutServer";

export class ShortcutServerMainer extends ShortcutServer {

    constructor() {
        super();
    }

    Init() {
        ipcMain.handle('aaa', (...args: any[]) => {
            console.log('ar---', args);
        });
        this.setMenu();

        globalShortcut.register('Alt+CommandOrControl+I', () => {
            console.log('ppppp----');
            
        })

    }

    aaa() {
        console.log('shortcut-main');
        this.setMenu();
    }

    setMenu() {
        const test = new MenuItem({
            label: '菜单1',
            submenu: [{
                role: 'help',
                accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
                click: () => {
                    console.log('rrrr');
                }
            }]
        })
        const mm = Menu.getApplicationMenu();
        mm?.append(test);
        Menu.setApplicationMenu(mm);

    }


}