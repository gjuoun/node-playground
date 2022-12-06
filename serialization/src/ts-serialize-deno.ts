import {
  Serializable,
  SerializeProperty,
  polymorphicClassFromJSON,
} from "https://deno.land/x/ts_serialize@v2.0.3/mod.ts";

class MyClass extends Serializable {

  @SerializeProperty({
    serializedKey: "my_string",
  })
  public myProperty = "Hello world!";
}

const myClass = new MyClass();

console.log(JSON.stringify(myClass));