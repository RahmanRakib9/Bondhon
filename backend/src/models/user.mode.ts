
/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import IUser from '../interfaces/user.interface';
import { User_Role } from '../constants/user.constant';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'username is Required!'],
    },
    email: {
      type: String,
      required: [true, 'email is Required!'],
    },
    password: {
      type: String,
      required: [true, 'password is Required!'],
    },
  },
  { timestamps: true },
);


export const User = model('User', userSchema);
