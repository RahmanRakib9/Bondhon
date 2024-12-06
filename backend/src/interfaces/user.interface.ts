import { User_Role } from "../constants/user.constant";

interface IUser {
  name: string;
  email: string;
  phonenumber: string;
  password: string;
  role: keyof typeof User_Role;
}
export default IUser;