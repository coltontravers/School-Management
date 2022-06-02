import React from "react";
import { css, tw, apply } from "twind/css";
import { Text } from "~/components/Text";

interface SchoolEventProps {
  title: string;
  description: string;
  date: Date;
}

const spacing = css`
  width: calc(33.33333% - 2rem);
  max-width: 250px;
`;

export const SchoolEvent = ({ title, description, date }: SchoolEventProps) => {
  return (
    <a
      href=""
      className={tw(
        `bg-primary-100 overflow-hidden flex flex-col h-15 justify-between transition-all duration-100 hover:bg-primary-200`,
        spacing
      )}
    >
      <Text size="h5" weight="semiBold">
        {title}
      </Text>
      <Text truncate>{date.toString()}</Text>
    </a>
  );
};
