import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly config: ConfigService) {}
  getHello(): string {
    const client = this.config.get<string>('clientInstance')
    return `Hello World Client ${client}`;
  }
}
