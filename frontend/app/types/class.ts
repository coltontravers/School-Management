import { Student } from "./user";

export interface Class {
  name: string;
  teacher: string;
  students: Student[];
}
