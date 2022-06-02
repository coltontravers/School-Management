import React from "react";
import { tw } from "twind/css";
import { RadioGroup, Radio } from "~/components/inputs/RadioGroup";
import { Flexbox } from "~/components/layout/Flexbox";
import { Text } from "~/components/Text";
import { QuestionAnswer } from "~/types/assignment";
import { AnsweredQuestion } from "../AnsweredQuestion";

interface QuestionsBarProps {
  horizontal?: boolean;
  hideOnSmallScreen?: boolean;
}

export const QuestionsBar = ({
  hideOnSmallScreen,
  horizontal,
}: QuestionsBarProps) => {
  return (
    <Flexbox
      direction={horizontal ? "row" : "column"}
      className={tw(`border-r border-r-gray-300 overflow-auto !xl:flex`, {
        "!hidden": hideOnSmallScreen,
      })}
    >
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-answer" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="open" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
      <AnsweredQuestion type="multiple-choice" question="Question here?" />
    </Flexbox>
  );
};
