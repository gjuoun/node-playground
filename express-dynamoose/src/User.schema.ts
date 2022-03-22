import dynamoose, { Schema, model } from "dynamoose";
import { Document } from "dynamoose/dist/Document";

// use cloud DB
dynamoose.aws.sdk.config.update({
  region: "us-west-2",
});

// use local db

const ddb = new dynamoose.aws.sdk.DynamoDB();
// overrite db endpoint
dynamoose.aws.ddb.local("http://localhost:4200");

console.log("Connected to ", ddb.config.endpoint);

class Cat extends Document {
  id: number;
  name: string;
}
const CatModel = dynamoose.model<Cat>("Cat", { id: Number, name: String });

async function start() {
  // Will raise type checking error as random is not a valid field.
  await CatModel.create({ id: 3 });

  // Will return the correct type of Cat
  const cat = await CatModel.get(3);
  console.log(cat);
}

start();
