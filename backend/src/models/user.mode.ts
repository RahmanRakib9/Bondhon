
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
    phonenumber: {
      type: String,
      required: [true, 'Phonenumber is Required!'],
    },
    password: {
      type: String,
      required: [true, 'password is Required!'],
    },
    role: {
      type: String,
      required: [true, 'ROLE is Required!'],
    },
  },
  { timestamps: true },
);


export const User = model('User', userSchema);
