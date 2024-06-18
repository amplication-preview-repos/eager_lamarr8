import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SyntaxServiceBase } from "./base/syntax.service.base";

@Injectable()
export class SyntaxService extends SyntaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
