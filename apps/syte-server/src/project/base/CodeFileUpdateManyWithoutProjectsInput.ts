/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CodeFileWhereUniqueInput } from "../../codeFile/base/CodeFileWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CodeFileUpdateManyWithoutProjectsInput {
  @Field(() => [CodeFileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CodeFileWhereUniqueInput],
  })
  connect?: Array<CodeFileWhereUniqueInput>;

  @Field(() => [CodeFileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CodeFileWhereUniqueInput],
  })
  disconnect?: Array<CodeFileWhereUniqueInput>;

  @Field(() => [CodeFileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CodeFileWhereUniqueInput],
  })
  set?: Array<CodeFileWhereUniqueInput>;
}

export { CodeFileUpdateManyWithoutProjectsInput as CodeFileUpdateManyWithoutProjectsInput };
