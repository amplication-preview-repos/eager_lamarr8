/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ErrorLogListRelationFilter } from "../../errorLog/base/ErrorLogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { SyntaxWhereUniqueInput } from "../../syntax/base/SyntaxWhereUniqueInput";

@InputType()
class CodeFileWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  content?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ErrorLogListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ErrorLogListRelationFilter)
  @IsOptional()
  @Field(() => ErrorLogListRelationFilter, {
    nullable: true,
  })
  errorLogs?: ErrorLogListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fileName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SyntaxWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SyntaxWhereUniqueInput)
  @IsOptional()
  @Field(() => SyntaxWhereUniqueInput, {
    nullable: true,
  })
  syntax?: SyntaxWhereUniqueInput;
}

export { CodeFileWhereInput as CodeFileWhereInput };
