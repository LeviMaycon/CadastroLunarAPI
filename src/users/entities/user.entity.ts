import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop()
  profile: {
    name: string;
    bio: string;
    avatar: string;
  }

  @Prop()
  reputation: number;

  @Prop()
  created_at: Date
}

export const UserSchema = SchemaFactory.createForClass(User);