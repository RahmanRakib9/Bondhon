import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("DB URL",process.env.DB_URL as string);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
