import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  Object.keys(configService.get('server')).forEach((key) => {
    Logger.debug(`'${key}' ${JSON.stringify(configService.get('server.' + key))}`, "MainService");
  });

  // await app.startAllMicroservicesAsync();
  await app.listen(parseInt(configService.get('server.port')) || 5051);
  Logger.log(`Server running on port: ${configService.get('server.port')}`, "MainService");
}

bootstrap();