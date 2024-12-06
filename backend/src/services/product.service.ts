import IProduct from "../interfaces/product.interface";
import { Product } from "../models/product.model";
import axios from "axios";

const WEATHER_API_KEY = "dee18a1bce2f400da5684900240612";
const WEATHER_API_URL = "http://api.weatherapi.com/v1/forecast.json";

console.log("Weather API Key:", process.env.WEATHER_API_KEY);
console.log("Weather API URL:", process.env.WEATHER_API_URL);


const createProduct = async (productPayload: IProduct) => {
    const product = await Product.create(productPayload);

    return product;
};

const getProducts = async () => {
    const products = await Product.find();

    return products;
};

const getProductsBySeller = async (sellerId: string) => {
    const products = await Product.find({ createdBy: sellerId });
    return products;
};

const processWeatherData = (data: any) => {
    const notifications: any[] = [];

    if (data.alerts && data.alerts.alert.length > 0) {
        notifications.push({
            type: "alert",
            message: `Weather alert in ${data.location.name}: ${data.alerts.alert[0].headline}`,
            details: data.alerts.alert[0].description,
        });
    }

    const forecast = data.forecast.forecastday;
    forecast.forEach((day: any) => {
        if (day.day.maxtemp_c > 35) {
            notifications.push({
                type: "general",
                message: `High temperature warning for ${data.location.name} on ${day.date}: ${day.day.maxtemp_c}°C.`,
            });
        }
        if (day.day.daily_chance_of_rain > 50) {
            notifications.push({
                type: "general",
                message: `Rain likely in ${data.location.name} on ${day.date}: ${day.day.daily_chance_of_rain}% chance.`,
            });
        }
    });

    return notifications;
};

// Fetch weather data and generate notifications
const getWeatherWithNotifications = async () => {
    const products = await Product.find();

    if (!products.length) {
        throw new Error("No products found");
    }

    const locations = [...new Set(products.map((product) => product.location))];

    const weatherPromises = locations.map(async (location) => {
        const encodedLocation = encodeURIComponent(location);
        const url = `${WEATHER_API_KEY}?key=${WEATHER_API_URL}&q=${encodedLocation}&days=3`;

        const response = await axios.get(url);

        const notifications = processWeatherData(response.data);

        return {
            location,
            weather: response.data,
            notifications,
        };
    });

    const weatherData = await Promise.all(weatherPromises);

    return weatherData;
};

const productServices={
    createProduct,
    getProducts,
    getWeatherWithNotifications,
    getProductsBySeller,
}
export default productServices;