import React from "react";
import { Icon } from "@iconify/react";

import { Flexbox } from "~/components/layout/Flexbox";
import { Text } from "~/components/Text";
import dayjs, { Dayjs } from "dayjs";
import { tw } from "twind/css";

interface AssignmentCardProps {
  name: string;
  subject: string;
  date: Dayjs;
  progress: number;
  className?: string;
}

const generateProgressColor = ({ progress }: { progress: number }) => {
  if (progress < 20) {
    return tw`bg-danger-main`;
  } else if (progress < 40) {
    return tw`bg-warning-500`;
  } else if (progress < 60) {
    return tw`bg-primary-main`;
  } else if (progress < 100) {
    return tw`bg-secondary-main`;
  }
  return tw`bg-success-main`;
};

export const AssignmentCard = ({
  name,
  subject,
  date,
  progress,
  className,
}: AssignmentCardProps) => {
  return (
    <div className={tw(`shadow-normalSm rounded`, className)}>
      <Flexbox alignItems="center" gap={4} className={tw`p-2`}>
        <Icon icon="bi:pencil-square" className={tw`text-h2`} />
        <Flexbox direction="column">
          <Text weight="bold">{name}</Text>
          <Text color="gray.400">{subject}</Text>
          <Text color="gray.400">{dayjs(date).format("M/D - h:mm A")}</Text>
        </Flexbox>
      </Flexbox>

      <div
        className={tw(
          `h-1 w-[${progress}%]`,
          generateProgressColor({ progress })
        )}
      ></div>
    </div>
  );
};
