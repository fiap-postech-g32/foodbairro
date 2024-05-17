import { Injectable } from "@nestjs/common/decorators";
import { OnModuleInit } from "@nestjs/common/interfaces";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }

}