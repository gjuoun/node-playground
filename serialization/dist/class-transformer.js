"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_transformer_1 = require("class-transformer");
var user1 = {
    name: "John",
};
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user2 = class_transformer_1.plainToClass(User, user1);
console.log(user2);
