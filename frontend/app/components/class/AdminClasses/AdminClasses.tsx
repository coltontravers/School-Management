import React from "react";
import { Table } from "~/components/Table";

type AdminClassProps = {};

export const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Teacher",
    accessor: "teacher",
  },
  {
    Header: "Avg Grade",
    accessor: "avgGrade",
  },
  {
    Header: "Attendance",
    accessor: "attendance",
  },
  {
    Header: "Students",
    accessor: "students",
  },
];

export const mockData = [
  {
    name: "English",
    teacher: "Mrs. Stevenson",
    avgGrade: "88",
    attendance: "93%",
    students: "28",
  },
  {
    name: "Math",
    teacher: "Mr. Garrison",
    avgGrade: "90",
    attendance: "96%",
    students: "30",
  },
];

export const AdminClasses = (props: AdminClassProps) => {
  return (
    <div>
      <Table columns={columns} data={mockData} canSelect />
    </div>
  );
};
