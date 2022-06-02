import { Dayjs } from "dayjs";
import React from "react";
import { tw } from "twind/css";
import { Text } from "~/components/Text";

export interface Event {
  from: Dayjs;
  to: Dayjs;
  title: string;
  description: string;
  class: string;
}

interface EventProps extends Event {
  onSelect: (event: Event) => void;
}

export const CalendarEvent = ({ onSelect, ...eventProps }: EventProps) => {
  const { title } = eventProps;

  return (
    <button
      className={tw`appearance-none focus:outline-none flex flex-col gap-2 w-full rounded p-1 bg-primary-main`}
      onClick={() => onSelect(eventProps)}
    >
      <Text color="white" size="caption" weight="bold">
        {title}
      </Text>
      <Text color="white">11:30 - 12:30</Text>
    </button>
  );
};
