import React from "react";
import { tw } from "twind/css";
import { Button } from "~/components/inputs/Button";
import { Modal, ModalProps } from "~/components/Modal/Modal";
import { ModalFooter } from "~/components/Modal/ModalFooter";
import { EditableEvent } from "./EditableEvent";

interface CalendarEventModalProps extends Omit<ModalProps, "children"> {}

export const CalendarEventModal = ({
  open,
  title,
  onClose,
}: CalendarEventModalProps) => {
  return (
    <Modal open={open} title={title} onClose={onClose}>
      <EditableEvent onClose={onClose} />
    </Modal>
  );
};
