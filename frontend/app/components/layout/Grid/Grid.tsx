import { ReactNode } from "react";
import { tw } from "twind";
import { Spacing } from "~/types/theme";

interface GridProps {
  columns?: typeof gridNumbers[number];
  rows?: typeof gridNumbers[number];
  gap?: Spacing;
  children: ReactNode;
}

const gridNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
] as const;

export const Grid = ({ columns, rows, gap }: GridProps) => {
  return (
    <div
      className={tw(
        columns && tw`grid-cols-${columns} `,
        rows && tw`grid-rows-${rows}`,
        gap && tw`gap-${gap}`
      )}
    >
      Grid
    </div>
  );
};
