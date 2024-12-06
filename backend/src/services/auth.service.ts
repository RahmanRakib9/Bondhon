import { ILoginUser } from "../interfaces/auth.interface";
import IUser from "../interfaces/user.interface";
import { User } from "../models/user.mode";
import { comparePasswordFields } from "../utils/comparePassword";
import jwt, { JwtPayload } from 'jsonwebtoken';


const registerUser = async (userPayload: IUser) => {
    const user = await User.findOne({ email: userPayload.email });

    if (user) {
        throw new Error("User already exist!")
    }

    const newUser = await User.create(userPayload);
    return newUser;
};

const loginUser = async (userLoginPayload: ILoginUser) => {
    const user = await User.findOne({ email: userLoginPayload.phoneNumber });

    if (!user) {
        throw new Error("User Not Exist!");
    }

    const isPasswordMatched = await comparePasswordFields(
        userLoginPayload.password,
        user.password,
    );

    if (!isPasswordMatched) {
        throw new Error("Password field didnot matched!")
    }

    const jwtPayload = {
        email: user.email,
        role: user.role,
    };

    const accessToken = jwt.sign(
        jwtPayload,
        process.env.ACCESS_TOKEN_SECRET_KEY as string,
        { expiresIn: "20m" },
    );

    return accessToken;
};


const authServices = {
    registerUser,
    loginUser,
}

export default authServices;
