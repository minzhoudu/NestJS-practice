import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Req,
  Res,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CustomerServices } from '../services/customers.service';
import { Response } from 'express';
import { CustomerDto } from '../DTOs/Customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customerServices: CustomerServices) {}

  @Get()
  getAllCustomers(@Res() res: Response) {
    const customers = this.customerServices.getAllCustomers();

    if (!customers || !customers.length) {
      res.status(404).json({
        message: 'No customers found',
        data: [],
      });
    }

    res.status(200).json({
      message: 'success',
      data: customers,
    });
  }

  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customerServices.findCustomer(id);

    if (!customer) {
      res.status(404).json({
        message: 'Customer not found',
        data: {},
      });
    }

    res.status(200).json({
      message: 'success',
      data: customer,
    });
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerServices.findCustomer(id);

    if (customer) return customer;

    throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCustomer(@Body() customer: CustomerDto) {
    this.customerServices.createCustomer(customer);
  }
}
