export interface IRegisterUser {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface ILoginUser {
  phoneNumber: string;
  password: string;
}
