import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SyntaxService } from "./syntax.service";
import { SyntaxControllerBase } from "./base/syntax.controller.base";

@swagger.ApiTags("syntaxes")
@common.Controller("syntaxes")
export class SyntaxController extends SyntaxControllerBase {
  constructor(
    protected readonly service: SyntaxService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
