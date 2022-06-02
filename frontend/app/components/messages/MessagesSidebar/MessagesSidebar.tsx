import React, { ReactNode } from "react";
import { tw } from "twind/css";
import { Button } from "~/components/inputs/Button";
import { IconButton } from "~/components/inputs/IconButton";
import { SearchInput } from "~/components/inputs/SearchInput";
import { Flexbox } from "~/components/layout/Flexbox";
import { Text } from "~/components/Text";

interface Group {
  type: "class" | "group" | "direct";
  id: string;
  name: string;
  latestMessage: {
    from: string;
    message: string;
  };
}

interface Groups {
  classes: Group[];
  groups: Group[];
  direct: Group[];
}

interface MessagesSidebarProps {
  selectedGroup: string | null;
  groups: Groups;
  onGroupChange: (id: string) => void;
}

export const MessagesSidebar = ({
  selectedGroup,
  groups,
  onGroupChange,
}: MessagesSidebarProps) => {
  console.log({ groups });
  return (
    <div
      className={tw(
        `flex-col h-full w-full hidden lg:flex lg:w-2/5 lg:max-w-[300px] bg-white border border-r-gray-300 overflow-hidden`,
        {
          "flex!": selectedGroup === null,
        }
      )}
    >
      <Flexbox
        justifyContent="spaceBetween"
        className={tw`p-2 border-b border-b-gray-300 mb-3`}
      >
        <SearchInput
          id="search-messages"
          placeholder="Search messages..."
          fullWidth
        />
        <IconButton icon="akar-icons:plus" />
      </Flexbox>
      <Flexbox className={tw`flex-1 overflow-auto`} direction="column">
        <Section label="Classes">
          {groups.classes.map(({ id, ...restProps }) => {
            return (
              <Group
                active={id === selectedGroup}
                onGroupChange={() => onGroupChange(id)}
                {...restProps}
              />
            );
          })}
        </Section>
        <Section label="Groups">
          {groups.groups.map(({ id, ...restProps }) => {
            return (
              <Group
                active={id === selectedGroup}
                onGroupChange={() => onGroupChange(id)}
                {...restProps}
              />
            );
          })}
        </Section>
        <Section label="DMs">
          {groups.direct.map(({ id, ...restProps }) => {
            return (
              <Group
                active={id === selectedGroup}
                onGroupChange={() => onGroupChange(id)}
                {...restProps}
              />
            );
          })}
        </Section>
      </Flexbox>
    </div>
  );
};

interface GroupProps extends Pick<Group, "latestMessage" | "name" | "type"> {
  active: boolean;
  onGroupChange: () => void;
}

const Group = ({ active, latestMessage, name, onGroupChange }: GroupProps) => {
  console.log(latestMessage);
  return (
    <a
      className={tw(`py-1 px-4 cursor-pointer transition-all duration-150`, {
        "bg-primary-main text-white": active,
      })}
      onClick={onGroupChange}
    >
      <Text
        weight="semiBold"
        color={active ? "white" : "black"}
        display="block"
        className={tw`mb-1`}
      >
        {name}
      </Text>
      <Text color={active ? "white" : "black"} display="block">
        {latestMessage.from}
      </Text>
      <Text color={active ? "gray.100" : "gray.main"}>
        {latestMessage.message}
      </Text>
    </a>
  );
};

const Section = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className={tw`flex flex-col gap-2`}>
      <Text weight="bold" size="body2" color="gray.main" className={tw`px-3`}>
        {label}
      </Text>
      <Flexbox direction="column">{children}</Flexbox>
    </div>
  );
};
