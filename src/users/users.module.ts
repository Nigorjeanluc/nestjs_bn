import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware'
import { AnotherMiddleware } from './middlewares/another/another.middleware'

// Controllers && Services
@Module({
  controllers: [UsersController],
  providers: [UsersService]
})

// Add a middleware
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExampleMiddleware).forRoutes('users')
    // consumer.apply(ExampleMiddleware).forRoutes(UsersController)
    consumer.apply(ExampleMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    },{
      path: 'users/:id',
      method: RequestMethod.GET
    }).apply(AnotherMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    },{
      path: 'users/:id',
      method: RequestMethod.GET
    })
  }
}
