import { Disposable } from "../common/lifecycle";
import { GModuleManager } from "./GModuleManage";

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
	console.log('serviceId---', serviceId);
	
	if (_modName2Id.has(serviceId)) {
		return _modName2Id.get(serviceId)!;
	}

	const id = <any>function(): any {}
	id.toString = () => serviceId;

	_modName2Id.set(serviceId, id);
	return id;
}

export function getModName2IdMap() {
	return _modName2Id;
}

export function MyAnnotation(targer: any, propertyKey: string | symbol){
	console.log('targer---', targer, propertyKey);
	targer[propertyKey] = 123
	
	// const dep = GModuleManager.Get(targer);
	// clg
}



export class GModule extends Disposable {

}