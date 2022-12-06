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
} from "class-validator";

export class Post {
  @Length(10, 20)
  title: string;

  @Contains("hello")
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  point: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @Min(0)
  raiting: number;
}

async function main() {
  let post = new Post();
  post.title = "1234567890";
  post.text = "helloworld";
  post.point = 8;
  post.email = "gjuoun@gmail.com";
  post.site = "google.com";
  post.createDate = new Date();
  post.raiting = 8.53;

  const errors = await validate(post);

  console.log(errors);
}

main();
