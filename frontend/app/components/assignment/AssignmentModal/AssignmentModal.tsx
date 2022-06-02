import React from "react";
import { tw } from "twind/css";
import { Button } from "~/components/inputs/Button";
import { Flexbox } from "~/components/layout/Flexbox";
import { Modal, ModalProps } from "~/components/Modal/Modal";
import { ModalFooter } from "~/components/Modal/ModalFooter";
import { Text } from "~/components/Text";
import { Assignment } from "~/types/assignment";

interface AssignmentModalProps
  extends Pick<ModalProps, "open" | "title">,
    Assignment {}

const generateNextButton = ({
  type,
  completed,
  progress,
}: Pick<AssignmentModalProps, "completed" | "type" | "progress">) => {
  if (!completed) {
    if (type === "other") {
      return <Button>Mark done</Button>;
    }

    if (progress > 0) {
      return <Button>Continue</Button>;
    }

    return <Button>Start</Button>;
  }

  if (type !== "other") return <Button>View</Button>;
};

export const AssignmentModal = ({
  open = true,
  title = "This is the title",
  description = "This is the description of the assignment.",
  type = "test",
  resources,
  completed,
  progress,
}: AssignmentModalProps) => {
  return (
    <Modal open={open} title={title}>
      <Flexbox direction="column" gap={5} className={tw`px-3`}>
        <div>
          <Text
            size="caption"
            color="gray.400"
            component="p"
            className={tw`pb-2`}
          >
            Due date: 1/1/22 10:00 AM
          </Text>
          <Text>{description}</Text>
        </div>
        <Flexbox direction="column" gap={3}>
          <Text weight="bold">Resources</Text>
          <Flexbox gap={3}>
            <div
              className={tw`h-10 w-10 bg-primary-main relative rounded cursor-pointer`}
            ></div>
            <div
              className={tw`h-10 w-10 bg-primary-main relative rounded cursor-pointer`}
            ></div>
            <div
              className={tw`h-10 w-10 bg-primary-main relative rounded cursor-pointer`}
            ></div>
          </Flexbox>
        </Flexbox>
      </Flexbox>
      <ModalFooter>
        <Button variant="ghost">Cancel</Button>
        {generateNextButton({ type, completed, progress })}
      </ModalFooter>
    </Modal>
  );
};
