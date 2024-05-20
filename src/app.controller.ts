import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Health-Check')
@Controller()
export class AppController {
    constructor() {}

    @Get('health-check')
    @ApiOperation({
        description: '',
    })
    healthCheck(): string {
        return "It's raining!! ^^,";
    }
}
