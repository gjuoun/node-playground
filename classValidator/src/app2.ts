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
  ValidationError,
  IsNumber,
  IsOptional,
} from "class-validator";

export class Post {
  @Length(10, 20)
  title: string;

  @IsOptional()
  @Contains("Jun")
  author: string;

  offer_type: string;
}

async function main() {
  let post = new Post(); //?
  post.title = "title1title1";
  // post.author = "Melody";

  const errors = await validate(post);

  console.log(errors);
}

main();
