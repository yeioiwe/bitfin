import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
    @ApiProperty({ type: String })
    authToken!: string;
}
