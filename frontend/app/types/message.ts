import { Admin, Student, Teacher } from "./user";

export interface Group {
  id: string;
  name: string;
  people: (Teacher | Student | Admin)[];
}

export interface Groups {
  classes: Group[];
  groups: Group[];
  direct: Group[];
}
