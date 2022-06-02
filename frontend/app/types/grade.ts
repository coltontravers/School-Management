import { Dayjs } from "dayjs";

export interface Grade {
  title: string;
  className: string;
  teacher: string;
  dateCompleted: Dayjs;
  grade: number;
}
