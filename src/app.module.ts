import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './configuration/config.module';

@Module({
  imports: [
    AppConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
