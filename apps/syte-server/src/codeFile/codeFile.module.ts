import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CodeFileModuleBase } from "./base/codeFile.module.base";
import { CodeFileService } from "./codeFile.service";
import { CodeFileController } from "./codeFile.controller";
import { CodeFileResolver } from "./codeFile.resolver";

@Module({
  imports: [CodeFileModuleBase, forwardRef(() => AuthModule)],
  controllers: [CodeFileController],
  providers: [CodeFileService, CodeFileResolver],
  exports: [CodeFileService],
})
export class CodeFileModule {}
