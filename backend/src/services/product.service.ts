import IProduct from "../interfaces/product.interface";
import { Product } from "../models/product.model";

const createProduct = async (productPayload: IProduct) => {
    const product = await Product.create(productPayload);

    return product;
};

const getProducts = async () => {
    const products = await Product.find();

    return products;
};

const productServices={
    createProduct,
    getProducts,
}
export default productServices;