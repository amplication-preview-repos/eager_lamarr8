import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CodeFileServiceBase } from "./base/codeFile.service.base";

@Injectable()
export class CodeFileService extends CodeFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
