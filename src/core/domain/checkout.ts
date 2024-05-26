import { ApiProperty } from '@nestjs/swagger';

export class Checkout {
    @ApiProperty({ example: 1 })
    id: number;
}
