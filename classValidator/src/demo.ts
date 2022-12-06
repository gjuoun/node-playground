import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsPhoneNumber,
  IsOptional,
  ValidateIf,
  IsString,
  Validate,
  ValidateNested,
} from "class-validator";

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";

// <= 5 good, > 5 bad
@ValidatorConstraint({ name: "CustomRatingValidator", async: false })
export class CustomRaitingValidator implements ValidatorConstraintInterface {
  validate(text: number, args: ValidationArguments) {
    text; //?
    args; //?

    return text <= 5;
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return "The number should less and equal than 5";
  }
}

export class Post {
  @IsOptional()
  @Length(10, 20)
  title?: string;

  @IsString()
  @ValidateIf((o) => o.title)
  @Length(10, 20)
  desc?: string;

  @Contains("hello")
  text: string;

  @Validate(CustomRaitingValidator)
  @IsInt() // <= 5 good, > 5 bad
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;

  @IsPhoneNumber("CA")
  phone: string;

  @IsDate()
  createDate: Date;

  @ValidateNested()
  user: User;
}

class User {
  @Length(10, 20)
  @IsString()
  name: string;
}

interface UserIntf {
  name: string;
}

async function main() {
  let post = new Post();
  post.title = "Titletitle"; // should not pass
  // post.desc = "desc "; // should not pass
  post.text = "this is a great post about hello world"; // should not pass
  post.rating = 3; // should not pass
  post.email = "jun@google.com"; // should not pass
  post.site = "www.google.com"; // should not pass
  post.phone = "9025801234"; // should not pass
  post.createDate = new Date(); // should not pass
  // post.user = new User(); // should not pass
  // post.user.name = "Jun"; // should not pass

  post; //?

  validate(post).then((errors) => {
    // errors is an array of validation errors
    if (errors.length > 0) {
      errors; //?
      console.log("validation failed. errors: ", errors);
      const errorDetails = errors.map((error) => {
        return {
          property: error.property,
          constraints: error.constraints,
        };
      });

      errorDetails; //?
    } else {
      console.log("validation succeed");
    }
  });

  // validateOrReject(post).catch((errors) => {
  //   console.log("Promise rejected (validation failed). Errors: ", errors);
  // });
  // // or
  // async function validateOrRejectExample(input) {
  //   try {
  //     await validateOrReject(input);
  //   } catch (errors) {
  //     console.log(
  //       "Caught promise rejection (validation failed). Errors: ",
  //       errors
  //     );
  //   }
  // }
}

main();
