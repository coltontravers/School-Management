import dayjs, { Dayjs } from "dayjs";
import { tw } from "twind";
import { GradeCircularProgressBar } from "~/components/grade/GradeCircularProgressBar";
import { Flexbox } from "~/components/layout/Flexbox";
import { Text } from "~/components/Text";

interface ClassCardProps {
  className: string;
  teacher: string;
  time: Dayjs;
  grade: number;
}

export const ClassCard = ({
  className,
  teacher,
  time,
  grade,
}: {
  className: string;
  teacher: string;
  time: Dayjs;
  grade: number;
}) => {
  return (
    <Flexbox
      className={tw`border-l-4 border-primary-main p-2 shadow-normalSm rounded`}
      justifyContent="spaceBetween"
      alignItems="center"
    >
      <Flexbox gap={1} direction="column">
        <Text display="block" weight="bold">
          {className}
        </Text>
        <Text display="block" color="gray.400">
          {teacher}
        </Text>
        <Text display="block" color="gray.400">
          {dayjs(time).format("h:mm A")}
        </Text>
      </Flexbox>
      <div className={tw`h-8 w-8`}>
        <GradeCircularProgressBar grade={grade} />
      </div>
    </Flexbox>
  );
};
