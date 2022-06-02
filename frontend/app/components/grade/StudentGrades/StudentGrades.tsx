import dayjs from "dayjs";
import React from "react";
import { tw } from "twind/css";
import { Carousel } from "~/components/Carousel";
import { Button } from "~/components/inputs/Button";
import { Flexbox } from "~/components/layout/Flexbox";
import { PageWrapper } from "~/components/layout/PageWrapper";
import { Text } from "~/components/Text";
import { Grade } from "~/types";
import { GradeCard } from "../GradeCard";

interface StudentGradesProps {}

const Section = ({ name, grades }: { name: string; grades: Grade[] }) => {
  return (
    <Flexbox gap={3} direction="column" className={tw`overflow-x-hidden`}>
      <Flexbox justifyContent="spaceBetween">
        <Text size="h5" weight="bold">
          {name}
        </Text>
        <Button variant="transparent" textColor="primary.main">
          View all
        </Button>
      </Flexbox>
      <Carousel>
        {grades.map((props) => (
          <div className={tw`px-2`}>
            <GradeCard {...props} />
          </div>
        ))}
      </Carousel>
    </Flexbox>
  );
};

const classes = [
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
  "English",
];
const grades: Grade[] = [
  {
    title: "English test",
    teacher: "Mrs. Sunderland",
    grade: 90,
    dateCompleted: dayjs(),
    className: "English",
  },
  {
    title: "English test",
    teacher: "Mrs. Sunderland",
    grade: 90,
    dateCompleted: dayjs(),
    className: "English",
  },
  {
    title: "English test",
    teacher: "Mrs. Sunderland",
    grade: 90,
    dateCompleted: dayjs(),
    className: "English",
  },
  {
    title: "English test",
    teacher: "Mrs. Sunderland",
    grade: 90,
    dateCompleted: dayjs(),
    className: "English",
  },
  {
    title: "English test",
    teacher: "Mrs. Sunderland",
    grade: 90,
    dateCompleted: dayjs(),
    className: "English",
  },
];

export const StudentGrades = (props: StudentGradesProps) => {
  return (
    <PageWrapper>
      {classes.map((className) => (
        <Section name={className} grades={grades} />
      ))}
    </PageWrapper>
  );
};
