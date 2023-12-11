import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { MUserModule } from '@bis-tec/mongodb-library';


@Module({
  imports: [MUserModule],
  controllers: [TestController],
  providers: [TestService],
  exports: [TestService]
})
export class TestModule {}
