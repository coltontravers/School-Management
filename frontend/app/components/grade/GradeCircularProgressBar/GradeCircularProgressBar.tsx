import {
  CircularProgressBar,
  CircularProgressBarProps,
} from "~/components/CircularProgressBar";

interface GradeCircularProgressBarProps
  extends Omit<CircularProgressBarProps, "percentage"> {
  grade: number;
}

const generateColor = (grade: number) => {
  if (grade < 65) {
    return "danger.main";
  } else if (grade < 70) {
    return "warning.main";
  } else if (grade < 80) {
    return "secondary.main";
  } else if (grade < 90) {
    return "primary.main";
  } else {
    return "success.main";
  }
};

export const GradeCircularProgressBar = ({
  grade,
  fontSize,
}: GradeCircularProgressBarProps) => {
  return (
    <CircularProgressBar
      percentage={grade}
      fontSize={fontSize}
      backgroundColor={generateColor(grade)}
    />
  );
};
