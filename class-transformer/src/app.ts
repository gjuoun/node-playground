import "reflect-metadata";
import { plainToClass, Transform, TransformFnParams } from "class-transformer";
import { IsBoolean, IsString } from "class-validator";

const BooleanStringToBoolean = ({ value }: TransformFnParams) => {
  const valueMap: Record<string, boolean> = {
    true: true,
    false: false,
  };

  if (typeof value === "boolean") {
    return value;
  } else if (typeof value === "string" && value in valueMap) {
    return valueMap[value];
  } else {
    throw new Error("BooleanStringToBoolean: value is not boolean or string of boolean");
  }
};

class MyPayload {
  @IsString()
  prop: string;

  @IsBoolean()
  @Transform(BooleanStringToBoolean, { toClassOnly: true })
  is_uqi: boolean;
}

const result1 = plainToClass(MyPayload, { prop: 1234, is_uqi: "true" });

const result1_1 = plainToClass(MyPayload, { prop: 1234, is_uqi: "false" });

const result2 = plainToClass(MyPayload, { prop: 1234, is_uqi: "true" });
