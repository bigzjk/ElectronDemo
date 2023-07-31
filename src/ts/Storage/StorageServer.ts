import { ServiceIdentifier, createDecorator } from '../mods/GModule';
import { GModule } from '../mods/GModule';
export const IStorageServer: ServiceIdentifier<IStorageServer> = createDecorator('server.storage');

export interface IStorageData {
    aaa?: string;
    info: {
        a: string;
        b: number;
        c?: boolean
    }
}

export interface IStorageServer extends GModule {
    Set<T extends keyof IStorageData>(key: T, value: IStorageData[T]): void;
    Set(key: string, value: string): void;
    Get<T extends keyof IStorageData>(key: T, defalutValue?: string): IStorageData[T] | null;
    Get<T extends string>(key: Omit<keyof IStorageData, T>, defalutValue?: string): string;
}
