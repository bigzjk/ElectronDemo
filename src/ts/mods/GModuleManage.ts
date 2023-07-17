import { DisposableMap } from "../common/lifecycle";
import { ServiceIdentifier, GModule } from './GModule';

export const GModuleManager = new class extends DisposableMap<ServiceIdentifier<GModule>, GModule> {

    Register<T extends GModule>(modeIdentifier: ServiceIdentifier<T>, module: T) {
        this.set(modeIdentifier, module);
        if (this.has(modeIdentifier)) {
            return;
        }
        this.set(modeIdentifier, module);
    }

    Get<T extends GModule>(modeIdentifier: ServiceIdentifier<T>): T {
        return this.get(modeIdentifier) as T;
    }

    GetAll() {
        return this.getStore();
    }

    protected OnDispose() {
        this.dispose();
    }
   
};