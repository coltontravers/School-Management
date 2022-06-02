import React, { Props } from "react";
import { tw } from "twind";
import { css } from "twind/css";
import { Checkbox } from "~/components/inputs/Checkbox";
import { RadioGroup, Radio } from "~/components/inputs/RadioGroup";
import { Flexbox } from "~/components/layout/Flexbox";
import { Text } from "~/components/Text";
import { QuestionAnswer } from "~/types/assignment";

interface AnsweredQuestionProps
  extends Pick<QuestionAnswer, "type" | "question"> {}

export const Answer = ({ type }: Pick<AnsweredQuestionProps, "type">) => {
  switch (type) {
    case "multiple-choice":
      return (
        <RadioGroup name="multiple-choice-sidebar">
          <Radio
            value="test"
            label="Option 1"
            checked
            onChange={() => {}}
            size="small"
            disabled
          />
          <Radio
            value="test 2"
            label="Option 2"
            onChange={() => {}}
            size="small"
            error
            disabled
          />
          <Radio
            value="test 3"
            label="Option 3"
            onChange={() => {}}
            size="small"
            disabled
          />
        </RadioGroup>
      );

    case "multiple-answer":
      return (
        <Flexbox direction="column" gap={2}>
          <Checkbox label="Option 1" checked size="small" disabled />
          <Checkbox label="Option 2" size="small" disabled />
          <Checkbox label="Option 3" size="small" disabled error />
        </Flexbox>
      );

    default:
      return <Text size="caption">This is an open answer.</Text>;
  }
};

const shrink = css`
  flex-shrink: 0;
`;

export const AnsweredQuestion = ({ type, question }: AnsweredQuestionProps) => {
  return (
    <div
      className={tw(
        "flex flex-col w-[250px] gap-1 border-b border-b-gray-300 last:border-b-0 py-3 px-2 cursor-pointer transition-all duration-150 hover:bg-gray-100",
        shrink
      )}
    >
      <Text size="body1" weight="bold">
        {question}
      </Text>
      <Answer type={type} />
    </div>
  );
};
