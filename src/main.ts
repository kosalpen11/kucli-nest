import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // Enable CORS
  app.enableCors({
    // origin: configService.corsOrigin,
    // credentials: true,
  });

  // Global prefix
  app.setGlobalPrefix(configService.apiPrefix);

  const port = configService.port;
  const host = configService.host;

  await app.listen(port, host);

  console.log(`Application is running on: http://${host}:${port}`);
  console.log(`Environment: ${configService.nodeEnv}`);
}
bootstrap();
