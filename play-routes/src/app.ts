import yaml from 'yaml'
import fs from 'fs'

enum Method {
  GET = "Get",
  POST = "Post"
}

interface Route extends Record<string, string> {
}

interface RouteYaml extends Record<Method, Route[]> {
}

const file = fs.readFileSync("./routes.yml", 'utf8')

const routesYaml: RouteYaml = yaml.parse(file)

let lines: string = ""
for (let k in routesYaml) {
  let method = k as keyof typeof routesYaml
  let routes = routesYaml[method]
  for (let route of routes) {
    for (let k in route) {
      let path = k as keyof typeof route as string
      let controller = route[path]

      lines += generateLine(method, path, controller)
    }
  }
}


function generateLine(method: Method, path: string, controller: string) {
  return `${method}\t\t${path}\t\t${controller}\n`
}

fs.writeFileSync("./routes", lines)



