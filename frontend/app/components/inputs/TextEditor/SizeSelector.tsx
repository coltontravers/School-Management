import { Icon } from "@iconify/react";
import { useState } from "react";
import { apply, css, tw } from "twind/css";
import { IconButton } from "~/components/inputs/IconButton";

const inputStyles = css`
  ${apply`appearance-none p-1 w-6 outline-none text-caption text-center`}

  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

interface SizeSelectorProps {
  size: number;
  onChange: (size: number) => void;
}

export const SizeSelector = ({
  size = 16,
  onChange = () => {},
}: SizeSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState(size);

  return (
    <div
      className={tw`flex w-15 rounded border border-gray-400 overflow-hidden`}
    >
      <IconButton
        icon="akar-icons:minus"
        iconSize="body1"
        backgroundColor="gray.100"
        round={false}
        className={tw`flex-1`}
        onClick={() => {
          const newSize = selectedSize - 1;

          setSelectedSize(newSize);
          onChange(newSize);
        }}
      />
      <input
        type="number"
        value={selectedSize}
        className={tw(inputStyles)}
        onChange={({ target: { value } }) => {
          const newSize = Number(value);

          setSelectedSize(newSize);
          onChange(newSize);
        }}
      ></input>
      <IconButton
        icon="akar-icons:plus"
        iconSize="body1"
        backgroundColor="gray.100"
        round={false}
        className={tw`flex-1`}
        onClick={() => {
          const newSize = selectedSize + 1;

          setSelectedSize(newSize);
          onChange(newSize);
        }}
      />
    </div>
  );
};
