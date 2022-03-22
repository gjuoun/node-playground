import express, { Express, Response } from "express";
import dynamoose from "dynamoose";
import dotenv from "dotenv";
dotenv.config();

let app: Express = express();

// const ddb = new dynamoose.aws.sdk.DynamoDB({
//   endpoint: "http://localhost:4200",
// });

// console.log("Connected to ", ddb.config.endpoint);

app.listen(3000, () => {
  console.log("listen on 3000");
});
