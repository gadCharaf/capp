import {SystemModel} from './system.model';
import {Deserializable} from "./deserializable.model";

export class FlowModel {
  name: String;
  description: String;
  consumers: Array<SystemModel>;
  idProxy:String;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}
