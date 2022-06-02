import { ReactNode } from "react";
import { tw } from "twind/css";

type DropdownItemProps = {
  children: ReactNode;
};

export const DropdownItem = ({ children }: DropdownItemProps) => {
  return (
    <div
      className={tw`w-full text-center py-2 px-4 hover:bg-primary-100 cursor-pointer`}
    >
      {children}
    </div>
  );
};
