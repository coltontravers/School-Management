import React, { ReactNode } from "react";
import { tw } from "twind/css";

type ModalFooterProps = {
  children: ReactNode;
};

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <div
      className={tw`flex gap-3 justify-end mt-2 bg-gray-100 px-3 py-2 rounded-b`}
    >
      {children}
    </div>
  );
};
