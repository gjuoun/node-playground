// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import jsonPatch from "fast-json-patch";

const a = {
  name: "John",
  file: "string",
  arr: [1, 2, 3],
};

const b = {
  name: "Jun",
  file: new File([], "name2.txt"),
  arr: [3, 1, 2, 3],
};

console.log(jsonPatch.compare(a, b));

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
