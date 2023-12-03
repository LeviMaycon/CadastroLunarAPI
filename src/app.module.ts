import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://levi:@cluster0.dcpjx.mongodb.net/?retryWrites=true&w=majority'
    ),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
