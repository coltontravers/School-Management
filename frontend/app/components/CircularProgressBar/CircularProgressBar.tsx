import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { css, tw } from "twind/css";
import getThemeValue from "~/utils/getThemeValue";
import { FontSize, BackgroundColor } from "../../theme";
import { Text } from "../Text";

export interface CircularProgressBarProps {
  percentage: number;
  backgroundColor?: BackgroundColor;
  fontSize?: FontSize;
}

export const CircularProgressBar = ({
  percentage,
  backgroundColor = "primary.main",
  fontSize = "body1",
}: CircularProgressBarProps) => {
  return (
    <CircularProgressbarWithChildren
      value={percentage}
      styles={buildStyles({
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: "butt",
        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,
        pathColor: getThemeValue(`backgroundColor.${backgroundColor}`),
        trailColor: getThemeValue(`backgroundColor.gray.100`),
      })}
    >
      <Text size={fontSize}>{percentage}%</Text>
    </CircularProgressbarWithChildren>
  );
};
