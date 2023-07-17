export class Container {
    private instances = new Map<string, any>();

    register(key: string, instance: any) {
        this.instances.set(key, instance);
    }

    resolve(key: string) {
        if (this.instances.has(key)) {
            return this.instances.get(key);
        }
        return null;
    }

}