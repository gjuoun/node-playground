import 'reflect-metadata';

import { Exclude, Expose, plainToClass, Transform, Type } from 'class-transformer';

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
  ValidateIf,
} from 'class-validator';

@Exclude()
export class Post {
  @Length(10, 20)
  @Expose()
  title: string;

  @Contains('hello')
  @Expose()
  text: string;


  // on top : condition
  // @ValidateIf()
  // class validator: => lower is higher priority
  @IsInt()
  @Max(10)
  @Min(0)
  // transformer decos to bottom
  @Expose()
  @Type(()=>Number)
  rating: number;

  @Expose()
  @IsEmail()
  email: string;


  @IsFQDN()
  @Expose()
  site: string;

  @IsDate()
  @Type(()=>Date)
  @Expose()
  createDate: Date;
}


const newPostJSON = `{ "title": "hellohello", "text": "hello world", "rating": "-1", "email": "jun@mistplay.com", "site": "www.mistplay.com", "createDate": "2020-01-01" }`;

const newPostParsed: Post = JSON.parse(newPostJSON); //?

const transformedClass = plainToClass(Post, newPostParsed); //?

typeof transformedClass.createDate //? 

async function main(){
  const validationErrors = await validate(transformedClass); //? 

  const validationError: Record<string, string> = {}

  validationErrors.forEach(error => {
    console.log(error) //?
    const propertyName = error.property //?
    const constraints = error.constraints! //?

    Object.keys(constraints).forEach(constraintName => {
      const constraint = constraints[constraintName] //?
      console.log(constraint) //?

      validationError[propertyName] = constraint //?  
    })

  }); //?

  validationError
}

main(); //?
