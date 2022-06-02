import React from "react";
import { tw } from "twind/css";
import { Button } from "~/components/inputs/Button";
import { Flexbox } from "~/components/layout/Flexbox";
import { Text } from "~/components/Text";
import { QuestionsBar } from "../QuestionsBar";

type TestCompletedProps = {
  canSeeResults: boolean;
};

export const TestCompleted = ({ canSeeResults }: TestCompletedProps) => {
  if (!canSeeResults) {
    return (
      <Flexbox
        justifyContent="center"
        alignItems="center"
        direction="column"
        fullWidth
        gap={3}
      >
        <Text size="h3" weight="bold">
          All done! Come back later to see your results.
        </Text>
        <Button>Back to dashboard</Button>
      </Flexbox>
    );
  }

  return (
    <Flexbox
      className={tw`w-full h-full`}
      justifyContent="spaceBetween"
      direction="column"
    >
      <Flexbox
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={tw`flex-1`}
        gap={3}
      >
        <Flexbox direction="column" className={tw`text-center`}>
          <Text size="h3" weight="bold">
            All done! See your results below.
          </Text>
          <Text size="h3" weight="bold">
            You can review your incorrect answers below.
          </Text>
        </Flexbox>
        <Button>Back to dashboard</Button>
      </Flexbox>
      <QuestionsBar horizontal />
    </Flexbox>
  );
};
