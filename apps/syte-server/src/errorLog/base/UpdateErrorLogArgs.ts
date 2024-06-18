/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ErrorLogWhereUniqueInput } from "./ErrorLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ErrorLogUpdateInput } from "./ErrorLogUpdateInput";

@ArgsType()
class UpdateErrorLogArgs {
  @ApiProperty({
    required: true,
    type: () => ErrorLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ErrorLogWhereUniqueInput)
  @Field(() => ErrorLogWhereUniqueInput, { nullable: false })
  where!: ErrorLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ErrorLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => ErrorLogUpdateInput)
  @Field(() => ErrorLogUpdateInput, { nullable: false })
  data!: ErrorLogUpdateInput;
}

export { UpdateErrorLogArgs as UpdateErrorLogArgs };
