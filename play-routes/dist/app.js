"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yaml_1 = __importDefault(require("yaml"));
const fs_1 = __importDefault(require("fs"));
var Method;
(function (Method) {
    Method["GET"] = "Get";
    Method["POST"] = "Post";
})(Method || (Method = {}));
const file = fs_1.default.readFileSync("./routes.yml", 'utf8');
const routesYaml = yaml_1.default.parse(file);
let lines = "";
for (let k in routesYaml) {
    let method = k;
    let routes = routesYaml[method];
    for (let route of routes) {
        for (let k in route) {
            let path = k;
            let controller = route[path];
            lines += generateLine(method, path, controller);
        }
    }
}
function generateLine(method, path, controller) {
    return `${method}\t\t${path}\t\t${controller}\n`;
}
fs_1.default.writeFileSync("./routes", lines);
//# sourceMappingURL=app.js.map