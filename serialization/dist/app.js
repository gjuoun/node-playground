"use strict";
// import {
//   Serializable,
//   SerializeProperty,
//   polymorphicClassFromJSON,
// } from "https://deno.land/x/ts_serialize@v2.0.3/mod.ts";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_serialize_1 = require("@gamebridgeai/ts_serialize");
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        var _this = _super.call(this) || this;
        _this.myProperty = "Hello world!";
        return _this;
    }
    __decorate([
        (0, ts_serialize_1.SerializeProperty)({
            serializedKey: "my_string",
        }),
        __metadata("design:type", Object)
    ], MyClass.prototype, "myProperty", void 0);
    return MyClass;
}(ts_serialize_1.Serializable));
var myClass = new MyClass();
console.log(JSON.stringify(myClass));