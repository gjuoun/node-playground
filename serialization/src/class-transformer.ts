import { plainToClass } from "class-transformer";

const user1 = {
  name: "John",
};

class User {
  name: string;
}

const user2 = plainToClass(User, user1);
console.log(user2);
