import IProduct from "../interfaces/product.interface";
import { Product } from "../models/product.model";

const createProduct = async (productPayload: IProduct) => {
    const product = await Product.create(productPayload);

    return product;
};

const productServices={
    createProduct,
}
export default productServices;