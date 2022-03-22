import dynamoose, { Schema, model } from "dynamoose";
import { Document } from "dynamoose/dist/Document";

//! connect to us-west-2
dynamoose.aws.sdk.config.update({
  region: "us-west-2",
});

// use local db
const ddb = new dynamoose.aws.sdk.DynamoDB();

const isTestMode = true
const isLocalDatabaseMode = true

if(isLocalDatabaseMode || isTestMode){
  //! override db endpoint
  dynamoose.aws.ddb.local("http://localhost:4200");
  console.log("Connected to http://localhost:4200");
}else{
  console.log("Connected to ", ddb.config.endpoint);
}



//? Cat 
class Cat extends Document {
  id: number;
  name: string;
}

const CatModel = dynamoose.model<Cat>(
  // table name
  "Cat",
  // schema
  { 
    id: Number, 
    name: String
  },
  { create: false });


async function start() {
  // Will raise type checking error as random is not a valid field.
  await CatModel.create({ id: 4 });

  // Will return the correct type of Cat
  const cat = await CatModel.get(4);
  console.log(cat);
}

start();
