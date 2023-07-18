import { createDecorator, GModule } from "../mods/GModule";

export const IShortcutServer = createDecorator<ShortcutServer>('mod.shortcut');

export abstract class ShortcutServer extends GModule {
    abstract aaa(): void;
}