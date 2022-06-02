import { ReactNode } from "react";
import { tw } from "twind";
import { Flexbox } from "../Flexbox";
import { Text } from "~/components/Text";

interface PageSection {
  name: string;
  children: ReactNode;
  className?: string;
}

export const PageSection = ({ name, children, className }: PageSection) => {
  return (
    <Flexbox
      gap={3}
      direction="column"
      className={tw(`shadow-normalSm py-3 px-4`, className)}
    >
      <Text size="h5" weight="bold">
        {name}
      </Text>
      {children}
    </Flexbox>
  );
};
