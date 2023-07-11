import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { CustomerServices } from './services/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomerServices],
})
export class CustomersModule {}
