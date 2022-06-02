import { Flexbox } from "../../layout/Flexbox";
import { Text } from "~/components/Text";
import { apply, css, tw } from "twind/css";
import dayjs from "dayjs";
import { Grade } from "~/types";
import { GradeCircularProgressBar } from "../GradeCircularProgressBar";

interface GradeCardProps extends Grade {}

const gradeStyles = css`
  min-width: 250px;
  ${apply`shadow-normalSm rounded p-2`}
`;

export const GradeCard = ({
  title,
  className,
  teacher,
  dateCompleted,
  grade,
}: GradeCardProps) => {
  return (
    <Flexbox className={tw(gradeStyles)}>
      <div className={tw`flex-1 flex-row gap-1`}>
        <Text weight="bold" display="block">
          {title}
        </Text>
        <Text color="gray.400" display="block">
          {className}
        </Text>
        <Text color="gray.400">{dayjs(dateCompleted).format("M/D/YY")}</Text>
      </div>
      <div className={tw`flex flex-col items-center`}>
        <div className={tw`w-9`}>
          <GradeCircularProgressBar percentage={90} grade={grade} />
        </div>
      </div>
    </Flexbox>
  );
};
