import { Class } from "./class";
import { Role } from "./roles";

export interface Student extends User {
  classes: Omit<Class, "students">;
}

export interface Teacher extends User {}

export interface Admin extends User {}

export interface User {
  firstName: string;
  lastName: string;
  address: {
    street: string;
    state: string;
    postal: string;
    country: string;
  };
  role: Role;
}
