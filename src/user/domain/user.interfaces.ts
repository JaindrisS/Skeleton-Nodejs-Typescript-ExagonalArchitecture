export type Roles = "ADMIN" | "USER";

export interface User {
  name: string;
  password: string;
  email: string;
  status: boolean;
  resetPassword?: string;
  rol: Roles;
  img: string;
}

export type Login = Pick<User, "email" | "password">;
