import { Icon } from "@iconify/react";
import { useSlate } from "slate-react";
import { tw } from "twind/css";
import { isMarkActive, toggleMark } from "./utils";

interface MarkButtonProps {
  format: string;
  icon: string;
}

const MarkButton = ({ format, icon }: MarkButtonProps) => {
  const editor = useSlate();

  return (
    <button
      className={tw(`appearance-none p-2 px-3 h-full`, {
        "bg-primary-300! text-white!": isMarkActive(editor, format),
      })}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon icon={icon} />
    </button>
  );
};

export default MarkButton;
