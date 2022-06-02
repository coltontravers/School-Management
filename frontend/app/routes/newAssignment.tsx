import { tw } from "twind/css";
import { DatePicker } from "~/components/inputs/DatePicker";
import { IconButton } from "~/components/inputs/IconButton";
import { ResourceSelector } from "~/components/inputs/ResourceSelector";
import { Select } from "~/components/inputs/Select";
import { TextEditor } from "~/components/inputs/TextEditor";
import { TextInput } from "~/components/inputs/TextInput";
import { TimePicker } from "~/components/inputs/TimePicker";
import { Flexbox } from "~/components/layout/Flexbox";
import { PageHeader } from "~/components/layout/PageHeader";
import { PageWrapper } from "~/components/layout/PageWrapper";
import { Text } from "~/components/Text";

const classesOptions = [
  { value: "all", label: "All Classes" },
  { value: "english", label: "English" },
];

const studentsOptions = [
  { value: "all", label: "All Students" },
  { value: "colton-travers", label: "Colton Travers" },
];

const assignmentTypeOptions = [
  { value: "homework", label: "Homework" },
  { value: "test", label: "Test" },
  { value: "quiz", label: "Quiz" },
  { value: "other", label: "Other" },
];

export default function NewAssignment() {
  return (
    <PageWrapper>
      <div>
        <Flexbox alignItems="center" className={tw``}>
          <IconButton icon="akar-icons:arrow-left" />
          <Text weight="semiBold">New Assignment</Text>
        </Flexbox>
        <div className={tw`flex flex-col gap-3 max-w-[1500px] p-5 m-auto`}>
          <TextInput label="Assignment Name" fullWidth />
          <Flexbox gap={2} alignItems="end" wrap="wrap">
            <Select
              options={classesOptions}
              defaultValue={classesOptions[0]}
              className={tw`flex-1`}
              id="classes"
              label="Classes"
            />
            <Select
              options={studentsOptions}
              defaultValue={studentsOptions[0]}
              className={tw`flex-1`}
              id="students"
              label="Students"
            />
            <Select
              options={assignmentTypeOptions}
              className={tw`flex-1`}
              id="assignment"
              label="Assignment type"
            />
            <DatePicker className={tw`flex-1`} label="Select due date" />
            <TimePicker className={tw`flex-1`} label="Select due time" />
          </Flexbox>
          <TextEditor />
          <ResourceSelector />
        </div>
      </div>
    </PageWrapper>
  );
}
