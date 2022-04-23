import * as dynamoose from "dynamoose";
import { Document } from "dynamoose/dist/Document";
import {
  Serializable,
  SerializeProperty,
  TransformKey,
} from "@gamebridgeai/ts_serialize";

class MyClass extends Serializable implements TransformKey {
  public tsTransformKey(key: string): string {
    return `__${key}__`;
  }

  constructor() {
    super();
  }

  @SerializeProperty({
    serializedKey: "my_property",
  })
  public myProperty = "Hello world!";
}

console.log(new MyClass().toJSON());
