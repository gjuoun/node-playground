import "reflect-metadata";

import {
  plainToClass,
  Transform,
  TransformFnParams,
  Expose,
  Exclude,
  Type,
} from "class-transformer";

export class ListOfNumber extends Array<Number> {
  // custom array functions ...
}

class Student {
  name: string;
  @Type(() => Number)
  age: number;
  @Type(() => School)
  school: School;
  @Type(() => Date)
  timestamp: Date;

  // @Transform(({ value }) => JSON.parse(value))
  complicatedObj: object;

  @Type(() => Number)
  // @Transform(({ value }) => JSON.parse(value))
  list: ListOfNumber;
}

class School {
  name: string;
}

const student = {
  name: "John",
  age: "20",
  list: "[1, 2, 3]",
};

// fe sends json
const studentJSON = JSON.stringify(student); //?

// be
const studentObj = JSON.parse(studentJSON); //?

const studentClass = plainToClass(Student, studentObj); //?
