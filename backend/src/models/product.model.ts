import { model, Schema } from 'mongoose';
import IProduct from '../interfaces/product.interface';

const productSchema = new Schema<IProduct>(
    {
        name: {
            type: String,
            required: [true, 'product name is Required!'],
        },
        price: {
            type: Number,
            required: [true, 'product price is Required!'],
        },
        location: {
            type: String,
            required: [true, 'location  is Required!'],
        },
        image: {
            type: String,
            required: [true, 'Image is Required!'],
        },
        expected_quantity: {
            type: Number,
            required: [true, 'Expected Quantity is Required!'],
        },
        expected_produce_month: {
            type: String
        },
        description: {
            type: String,
        },
    },
    { timestamps: true },
);

export const Product = model('Product', productSchema);
