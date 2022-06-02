export interface Resource {
  title: string;
  description: string;
  image: string;
}

export type QuestionType = "multiple-choice" | "multiple-answer" | "open";

export type AssignmetType = "test" | "homework" | "other";

export interface Answer {
  question: string;
  description: string;
}

export interface MultipleChoiceAnswer extends Answer {
  answer: string;
}

export interface MultipleAnswer extends Answer {
  answers: { [answer: string]: boolean }[];
}

export interface OpenAnswer extends Answer {
  answers: any;
}

export interface QuestionAnswer {
  type: QuestionType;
  question: string;
  description: string;
}

export interface Assignment {
  type: AssignmetType;
  title: string;
  description: string;
  resources: Resource[];
  completed: boolean;
  progress: number;
  numberOfQuestions: number | null;
}

export interface Test extends Assignment {
  questions: QuestionAnswer[];
}

// const questions = [
//     {
//         type: "multiple-choice",
//         description: "string here",
//         answer: ""
//     }
// ]
