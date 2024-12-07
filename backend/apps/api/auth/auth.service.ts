import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { EntityManager } from 'typeorm';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private em: EntityManager,
    private configService: ConfigService,
  ) {}

  async login(dto: AuthDto) {
    const user = await this.em.findOneBy(UserEntity, {
      username: dto.username,
    });

    if (!user) throw new UnauthorizedException();

    if (user.password != dto.password) throw new UnauthorizedException();

    const payload = { id: user.id, sub: user.username };
    return {
      access_token: this.jwtService.sign(payload, {
        privateKey: this.configService.get('JWT_SECRET_TOKEN'),
      }),
    };
  }
}
