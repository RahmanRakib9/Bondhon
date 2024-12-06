interface IProduct {
    name: string;
    price: number;
    location: string;
    image: string;
    expected_quantity: Number;
    expected_produce_month?:String,
    description?: string
}
export default IProduct;