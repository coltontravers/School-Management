import React, { ReactNode } from "react";
import { tw } from "twind/css";
import { Text } from "../../Text";

type RadioGroupProps = {
  name: string;
  label?: string;
  children: ReactNode;
};

export const RadioGroup = ({ label, name, children }: RadioGroupProps) => {
  return (
    <div className={tw`flex`}>
      {label && <Text size="body1">{label}</Text>}
      <div className={tw`flex flex-col gap-2`} role="radiogroup" id={name}>
        {children}
      </div>
    </div>
  );
};
