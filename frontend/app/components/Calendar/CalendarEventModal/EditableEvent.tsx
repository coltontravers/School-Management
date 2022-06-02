import React from "react";
import { tw } from "twind/css";
import { Button } from "~/components/inputs/Button";
import { DatePicker } from "~/components/inputs/DatePicker";
import { Select } from "~/components/inputs/Select";
import { TextEditor } from "~/components/inputs/TextEditor";
import { TextInput } from "~/components/inputs/TextInput";
import { TimePicker } from "~/components/inputs/TimePicker";
import { Flexbox } from "~/components/layout/Flexbox";
import { ModalProps } from "~/components/Modal/Modal";
import { ModalFooter } from "~/components/Modal/ModalFooter";

interface EditableEventProps extends Pick<ModalProps, "onClose"> {}

const classes = [
  {
    value: "english",
    label: "English",
  },
];

export const EditableEvent = ({ onClose }: EditableEventProps) => {
  return (
    <>
      <Flexbox gap={3} direction="column" className={tw`px-3`}>
        <Flexbox gap={3} alignItems="center">
          <TextInput placeholder="Event name" label="Event Name" fullWidth />{" "}
          <Select options={classes} label="Class" />
        </Flexbox>
        <Flexbox gap={3}>
          <DatePicker label="Select date" />
          <TimePicker label="Start time" />
          <TimePicker label="End time" />
        </Flexbox>
        <TextEditor />
      </Flexbox>
      <ModalFooter>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button>Save</Button>
      </ModalFooter>
    </>
  );
};
