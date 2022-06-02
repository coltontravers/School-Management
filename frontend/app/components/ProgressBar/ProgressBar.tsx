import React from "react";
import { tw } from "twind/css";
import { Spacing } from "~/types";

interface ProgressBarProps {
  progress: number;
  height?: Spacing;
}

export const ProgressBar = ({ progress, height = 2 }: ProgressBarProps) => {
  return (
    <div className={tw`bg-primary-100 h-${height.toString()} w-full relative`}>
      <div
        className={tw`bg-primary-main absolute top-0 left-0 h-full w-[${progress}%]`}
      ></div>
    </div>
  );
};
