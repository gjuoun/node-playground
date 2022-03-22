import {
  Response as Res,
  Params,
  Controller,
  Get,
  attachControllers,
} from "@decorators/express";
import { Injectable } from "@decorators/di";
import express, { Express, Response } from "express";

@Controller("/user")
@Injectable()
class UserController {
  constructor() {}

  @Get("/")
  getData(@Res() res: Response, @Params("id") id: string) {
    res.send("haha");
  }
}

@Controller("/cat")
@Injectable()
class CatController {
  constructor() {}

  @Get("/:id")
  getData(@Res() res: Response, @Params("id") id: string) {
    res.send(id);
  }
}

let app: Express = express();

attachControllers(app, [UserController, CatController]);

app.listen(3000, () => {
  console.log("listen on 3000");
});
