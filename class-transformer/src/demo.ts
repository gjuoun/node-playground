import "reflect-metadata";
import {
  classToPlain,
  plainToClass,
  Type,
  instanceToPlain,
  Expose,
  Exclude,
  Transform,
} from "class-transformer";

class Student {
  @Expose()
  @Type(() => String)
  name: string;

  @Expose()
  @Type(() => Number)
  age: number;

  @Exclude()
  @Type(() => String)
  password: string;

  @Type(() => Number)
  grades: number[];

  @Type(() => School)
  school: School;

  @Transform(({ value }) => {
    const friends: Friend[] = value.map((friend: any) => {
      return {
        age: parseInt(friend.age),
        name: friend.name,
      };
    }); //?
    return friends;
  })
  friends: Friend[];

  @Type(() => Date)
  timestamp: number;
}

interface Friend {
  name: string;
  age: number;
}

class School {
  name: string;
}

const oldStudent = {
  name: "John",
  age: "20",
  password: "123",
  grades: ["1", "2", "3"],
  school: {
    name: "School Name",
  },
  friends: [
    {
      name: "Friend 1",
      age: "20",
    },
    {
      name: "Friend 2",
      age: "20",
    },
  ],
  timestamp: new Date().getTime(),
}; //?

const studentJSON = JSON.stringify(oldStudent);

const studentObj = JSON.parse(studentJSON); //?

let studentClass = plainToClass(
  Student,
  studentObj
  // { excludeExtraneousValues: true,}
); //?

typeof studentClass.school; //?
studentClass.school instanceof School; //?
studentClass.timestamp instanceof Date; //?
typeof studentClass.age; //?

// let studentPlain = instanceToPlain(studentClass); //?
