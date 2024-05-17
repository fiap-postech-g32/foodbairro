import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health-Check')
@Controller()
export class AppController {
    constructor() {}

    @Get('health-check')
    healthCheck(): string {
        return "It's raining!! ^^,";
    }
}
