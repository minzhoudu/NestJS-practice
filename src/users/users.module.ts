import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import {
  ValidateCustomerMiddleware,
  ValidateCustomerMiddleware2,
} from './middlewares/validateUser.middleware';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
  ],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCustomerMiddleware2)
      .exclude({
        path: 'users/:username',
        method: RequestMethod.GET,
      })
      .forRoutes(UsersController);
    // consumer.apply(ValidateCustomerMiddleware).forRoutes({
    //   path: 'users/:username',
    //   method: RequestMethod.GET,
    // });
  }
}
