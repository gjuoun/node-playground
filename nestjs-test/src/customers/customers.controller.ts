import { Controller, Get, Inject } from '@nestjs/common';
import { STRIPE_CLIENT } from 'src/config/stripe.module';
import Stripe from 'stripe';

@Controller('customers')
export class CustomersController {
  constructor(@Inject(STRIPE_CLIENT) private stripe: Stripe) {}

  @Get('/')
  listCustomers() {
    return this.stripe.customers.list();
  }
}
