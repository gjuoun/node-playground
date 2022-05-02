import {
  Serializable,
  SerializeProperty,
  polymorphicClassFromJSON,
} from "@gamebridgeai/ts_serialize";

class MyClass extends Serializable {

  @SerializeProperty({
    serializedKey: "my_string",
  })
  public myProperty = "Hello world!";
}

const myClass = new MyClass();

console.log(JSON.stringify(myClass));