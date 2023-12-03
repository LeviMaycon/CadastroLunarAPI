import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
require('dotenv').config()

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://levi:${process.env.CHAVE}@cluster0.dcpjx.mongodb.net/?retryWrites=true&w=majority`
    ),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
