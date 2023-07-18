import { ipcRenderer } from 'electron';

import { ShortcutServer } from "../ShortcutServer";

export class ShortcutServerRenderer extends ShortcutServer {

    Init() {
        // ipcRenderer.on('bbb', (e) => {
        //     console.log('bbb');
        // })
    }

    aaa() {
        console.log('shortcut-renderer');
        ipcRenderer.invoke('aaa', '1', 'p')
    }
}