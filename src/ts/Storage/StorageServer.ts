import { createDecorator } from '../mods/GModule';
import { GModule } from '../mods/GModule';
export const IStorageServer = createDecorator('server.storage');

export interface IStorageServer extends GModule {
    Set(key: string, value: string): void;
    Get(key: string): any;
}
