import React from "react";
import { Flexbox } from "~/components/layout/Flexbox";
import { Text } from "~/components/Text";

interface SchoolPostProps {
  title: string;
  body: string;
}

export const SchoolPost = ({ title, body }: SchoolPostProps) => {
  return (
    <Flexbox gap={3} direction="column">
      <Text size="h4" weight="bold">
        {title}
      </Text>
      <Text>{body}</Text>
    </Flexbox>
  );
};
