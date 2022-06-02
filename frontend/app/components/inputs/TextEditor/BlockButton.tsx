import { Icon } from "@iconify/react";
import { useSlate } from "slate-react";
import { tw } from "twind";
import { isBlockActive, TEXT_ALIGN_TYPES, toggleBlock } from "./utils";

interface BlockButtonProps {
  format: string;
  icon: string;
}

const BlockButton = ({ format, icon }: BlockButtonProps) => {
  const editor = useSlate();
  return (
    <button
      className={tw(`appearance-none p-2 px-3 h-full`, {
        "bg-primary-300! text-white!": isBlockActive(
          editor,
          format,
          TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
        ),
      })}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon icon={icon} />
    </button>
  );
};

export default BlockButton;
