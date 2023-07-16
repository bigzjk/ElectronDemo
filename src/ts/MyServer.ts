import { Disposable } from "./common/lifecycle";

export class MyServer extends Disposable {
    
    onEvtCountChanged = this._register(new Emit())

}