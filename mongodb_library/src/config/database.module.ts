import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: `mongodb://${config.get('server.mongo_db.hostname')}/${config.get('server.mongo_db.name')}`,
        user: config.get('server.mongo_db.user'),
        pass: config.get('server.mongo_db.pass'),
        authSource: config.get('server.mongo_db.auth'),
      }), connectionName: 'myConnection'
    })
  ],
})
export class DatabaseModule {}