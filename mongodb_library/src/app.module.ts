import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { serverConfig } from './config/server.config';
import { DatabaseModule as DatabaseConfig } from './config/database.module';

import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['mongodb_library.env', '.env'],
      load: [serverConfig],
      isGlobal: true
    }),
    DatabaseConfig,    
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
