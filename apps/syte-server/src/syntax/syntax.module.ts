import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SyntaxModuleBase } from "./base/syntax.module.base";
import { SyntaxService } from "./syntax.service";
import { SyntaxController } from "./syntax.controller";
import { SyntaxResolver } from "./syntax.resolver";

@Module({
  imports: [SyntaxModuleBase, forwardRef(() => AuthModule)],
  controllers: [SyntaxController],
  providers: [SyntaxService, SyntaxResolver],
  exports: [SyntaxService],
})
export class SyntaxModule {}
