import IUser from "../interfaces/user.interface";
import { User } from "../models/user.mode";

const registerUser = async (userPayload: IUser) => {
    const user = await User.findOne({ email: userPayload.email });

    if (user) {
        throw new Error("User already exist!")
    }

    const newUser = await User.create(userPayload);
    return newUser;
};

const authServices = {
    registerUser,
}

export default authServices;
