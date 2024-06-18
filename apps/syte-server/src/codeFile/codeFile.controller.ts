import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CodeFileService } from "./codeFile.service";
import { CodeFileControllerBase } from "./base/codeFile.controller.base";

@swagger.ApiTags("codeFiles")
@common.Controller("codeFiles")
export class CodeFileController extends CodeFileControllerBase {
  constructor(
    protected readonly service: CodeFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
