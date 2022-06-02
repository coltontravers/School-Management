import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { tw } from "twind/css";
import { Text } from "~/components/Text";

interface CalendarWidgetEventProps {
  name: string;
  description?: string;
  date: Dayjs;
}

export const CalendarWidgetEvent = ({
  name,
  description,
  date,
}: CalendarWidgetEventProps) => {
  return (
    <div className={tw`border-l-4 border-warning-main p-2 shadow-normalSm`}>
      <Text size="h5" weight="bold">
        {name}
      </Text>
      {description?.length && <Text>{description}</Text>}
      <Text color="gray.400" className={tw`block text-right`}>
        {dayjs(date).format("h:mm A")}
      </Text>
    </div>
  );
};
