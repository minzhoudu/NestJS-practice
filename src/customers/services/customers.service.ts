import { Injectable } from '@nestjs/common';
import { CustomerDto } from '../DTOs/Customer.dto';
import { Customer } from '../types/Customer';

@Injectable()
export class CustomerServices {
  private customers: Array<Customer> = [
    {
      id: 1,
      email: 'papy@gmail.com',
      name: 'Pavle',
    },
    {
      id: 2,
      email: 'ana@gmail.com',
      name: 'Ana',
    },
    {
      id: 3,
      email: 'toma@gmail.com',
      name: 'Toma',
    },
  ];

  findCustomer(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  getAllCustomers() {
    return this.customers;
  }

  createCustomer(customer: CustomerDto) {
    this.customers.push(customer);
  }
}
