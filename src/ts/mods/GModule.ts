/**
 * Identifies a service of type `T`.
 */
export interface ServiceIdentifier<T> {
	(...args: any[]): void;
	type: T;
}

let _modName2Id: Map<string, ServiceIdentifier<any>> = new Map<string, ServiceIdentifier<any>>();


/**
 * The *only* valid way to create a {{ServiceIdentifier}}.
 */
export function createDecorator<T>(serviceId: string): ServiceIdentifier<T> {

	if (_modName2Id.has(serviceId)) {
		return _modName2Id.get(serviceId)!;
	}

	const id = <any>function (target: Function, key: string, index: number): any {
		// if (arguments.length !== 3) {
		// 	throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
		// }
		// storeServiceDependency(id, target, index);
	};

	id.toString = () => serviceId;

	_modName2Id.set(serviceId, id);
	return id;
}