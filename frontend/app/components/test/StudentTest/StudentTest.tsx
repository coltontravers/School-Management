import React, { useState } from "react";
import { tw } from "twind";
import { Button } from "~/components/inputs/Button";
import { Flexbox } from "~/components/layout/Flexbox";
import { QuestionsBar } from "../QuestionsBar";
import { RadioGroup, Radio } from "~/components/inputs/RadioGroup";
import { Checkbox } from "~/components/inputs/Checkbox";
import { Text } from "~/components/Text";
import { QuestionType, QuestionAnswer, Assignment } from "~/types/assignment";
import { TextEditor } from "~/components/inputs/TextEditor";
import { ProgressBar } from "~/components/ProgressBar";

// How can I make a dynamic type here. I need the "answer(s)" type to change based on the type of question it is (multiple choice, multiple answer, etc).
interface StudentTestProps {
  question: QuestionAnswer;
  assignment: Assignment;
}

export const StudentTest = ({
  question: { type, description, question },
  assignment: { progress },
}: StudentTestProps) => {
  const [assignmentProgress, setAssignmentProgress] = useState(progress);

  return (
    <>
      <ProgressBar progress={assignmentProgress} />
      <Flexbox className={tw`flex-1 overflow-hidden`}>
        <QuestionsBar hideOnSmallScreen />
        <Flexbox direction="column" className={tw`flex-1`}>
          <Text size="h4" weight="bold" className={tw`p-2 self-end`}>
            18 of 22
          </Text>
          <Flexbox
            gap={5}
            className={tw`flex-1 flex-col lg:flex-row`}
            justifyContent="center"
            alignItems="center"
          >
            <Flexbox
              direction="column"
              gap={4}
              className={tw`w-1/2 min-w-[400px] max-w-[800px]`}
            >
              <Text size="h2">{question}</Text>
              <Text size="h4">{description}</Text>
            </Flexbox>
            <Flexbox direction="column" gap={8} className={tw`p-2`}>
              <Answer answerType={type} />
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
      <Flexbox justifyContent="spaceBetween" className={tw`px-3 py-2`}>
        <Text size="h4" weight="bold">
          English Test
        </Text>
        <Flexbox justifyContent="end" gap={3} alignItems="center">
          <Button variant="ghost">Previous</Button>
          <Button variant="ghost">Next</Button>
        </Flexbox>
      </Flexbox>
    </>
  );
};

const MultipleChoice = () => {
  const [selected, setSelected] = useState<string>();

  return (
    <RadioGroup name="multiple-choice">
      <Radio
        value="option-1"
        label="Option 1"
        checked={selected === "option-1"}
        onChange={(event) => {
          setSelected(event.currentTarget.value);
        }}
      />
      <Radio
        value="option-2"
        label="Option 2"
        checked={selected === "option-2"}
        onChange={(event) => {
          setSelected(event.currentTarget.value);
        }}
      />
      <Radio
        value="option-3"
        label="Option 3"
        checked={selected === "option-3"}
        onChange={(event) => {
          setSelected(event.currentTarget.value);
        }}
      />
    </RadioGroup>
  );
};

const Answer = ({ answerType }: { answerType: QuestionType }) => {
  switch (answerType) {
    case "multiple-choice":
      return <MultipleChoice />;

    case "multiple-answer":
      return (
        <div>
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" />
          <Checkbox label="Option 3" />
        </div>
      );

    default:
      return <TextEditor />;
  }
};
