import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class UserProfile {
  @Prop()
  name: string;

  @Prop()
  bio: string;

  @Prop()
  avatar: string;
}

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

  @Prop({ type: UserProfile })
  profile: UserProfile;

  @Prop()
  reputation: number;

  @Prop()
  created_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
