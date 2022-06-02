import React, { useState } from "react";
import { tw } from "twind";
import { Select } from "~/components/inputs/Select";
import { Button } from "~/components/inputs/Button";
import { TextArea } from "~/components/inputs/TextArea";
import { Flexbox } from "~/components/layout/Flexbox";
import { QuestionsBar } from "../QuestionsBar";
import { RadioGroup, Radio } from "~/components/inputs/RadioGroup";
import { Checkbox } from "~/components/inputs/Checkbox";
import { hyphenate } from "~/utils/hyphenate";
import { Text } from "~/components/Text";

type TeacherTestProps = {};

type TestAnswer = "multiple-choice" | "multiple-answer" | "open-answer";

// Cleanup the flexbox hell

export const TeacherTest = (props: TeacherTestProps) => {
  const [answerType, setAnswerType] = useState<TestAnswer>("multiple-choice");

  return (
    <Flexbox direction="column" gap={3} className={tw`h-full`}>
      <Flexbox flex="1" className={tw`overflow-hidden`}>
        <QuestionsBar hideOnSmallScreen />
        <Flexbox
          justifyContent="center"
          alignItems="center"
          flex="1"
          className={tw`px-3`}
        >
          <Flexbox
            gap={5}
            direction="column"
            className={tw`md:flex-row`}
            justifyContent="center"
          >
            <Flexbox
              direction="column"
              gap={4}
              className={tw`w-1/2 min-w-[400px] max-w-[800px]`}
            >
              <TextArea
                id="title"
                placeholder="Your question here"
                className={tw`text-h2 border-none`}
                fullWidth
              />
              <TextArea
                id="title"
                placeholder="Any more info needed?"
                className={tw`text-h4 border-none`}
                fullWidth
              />
            </Flexbox>
            <Flexbox direction="column" gap={8} className={tw`p-2`}>
              <Select
                options={questionsOptions}
                defaultValue={questionsOptions[0]}
                onChange={(selection) => {
                  selection && setAnswerType(selection.value);
                }}
                className={tw`w-20`}
              />
              <Answer answerType={answerType} />
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
      <Flexbox justifyContent="spaceBetween" className={tw`px-3 py-2`}>
        <Text size="h4" weight="bold">
          English Test
        </Text>
        <Flexbox justifyContent="end" gap={3} alignItems="center">
          <Button tone="danger">Delete</Button>
          <Button variant="ghost">Previous</Button>
          <Button variant="ghost">Next</Button>
          <Button>Finish</Button>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};

type AnswerOption = { value: TestAnswer; label: string };

const questionsOptions: AnswerOption[] = [
  {
    value: "multiple-choice",
    label: "Multiple choice",
  },
  {
    value: "multiple-answer",
    label: "Multiple answer",
  },
  {
    value: "open-answer",
    label: "Open answer",
  },
];

const AddOptionButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      size="small"
      variant="ghost"
      className={tw`self-end`}
      onClick={onClick}
    >
      Add
    </Button>
  );
};

type MultipleChoiceType = { value: string; label: string };

const MultipleChoice = () => {
  const [answers, setAnswers] = useState<MultipleChoiceType[]>([
    { label: "Option 1", value: "option-1" },
  ]);
  const [correctAnswer, setCorrectAnswer] = useState<string>();

  return (
    <Flexbox gap={3} direction="column">
      <RadioGroup name="multiple-choice">
        {answers.map(({ label, value }, i) => {
          return (
            <Radio
              key={`${i}-${value}`}
              value={value}
              label={label}
              checked={value === correctAnswer}
              onChange={(event) => {
                setCorrectAnswer(event.currentTarget.value);
              }}
            />
          );
        })}
      </RadioGroup>
      <AddOptionButton
        onClick={() => {
          setAnswers([
            ...answers,
            {
              label: `Option ${answers.length + 1}`,
              value: `option-${answers.length + 1}`,
            },
          ]);
        }}
      />
    </Flexbox>
  );
};

const MultipleAnswer = () => {
  const [answers, setAnswers] = useState<MultipleChoiceType[]>([
    { label: "Option 1", value: "option-1" },
  ]);
  const [correctAnswers, setCorrectAnswers] =
    useState<{
      [answer: string]: boolean;
    }>();

  return (
    <Flexbox gap={3} direction="column">
      <Flexbox gap={2}>
        <form>
          {answers.map(({ label, value }, i) => {
            return (
              <Checkbox
                key={`${i}-${value}`}
                label={label}
                onChange={(event) => {
                  setCorrectAnswers({
                    ...correctAnswers,
                    [event.currentTarget.value]: event.currentTarget.checked,
                  });
                }}
                checked={correctAnswers?.[value]}
              />
            );
          })}
        </form>
      </Flexbox>
      <AddOptionButton
        onClick={() => {
          setAnswers([
            ...answers,
            {
              label: `Option ${answers.length + 1}`,
              value: `option-${answers.length + 1}`,
            },
          ]);
        }}
      />
    </Flexbox>
  );
};

const Answer = ({ answerType }: { answerType: TestAnswer }) => {
  switch (answerType) {
    case "multiple-choice":
      return <MultipleChoice />;

    case "multiple-answer":
      return <MultipleAnswer />;

    default:
      return null;
  }
};
