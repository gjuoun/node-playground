// import {
//   Serializable,
//   SerializeProperty,
//   polymorphicClassFromJSON,
// } from "https://deno.land/x/ts_serialize@v2.0.3/mod.ts";

import {
  Serializable,
  SerializeProperty,
  polymorphicClassFromJSON,
} from "@gamebridgeai/ts_serialize";

class MyClass extends Serializable {
  // constructor() {
  //   super();
  // }

  @SerializeProperty({
    serializedKey: "my_string",
  })
  public myProperty = "Hello world!";
}

const myClass = new MyClass();

console.log(JSON.stringify(myClass));
