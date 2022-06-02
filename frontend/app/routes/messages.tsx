import { useState } from "react";
import { css, tw } from "twind/css";
import { useGetMessageGroups } from "~/api";
import { IconButton } from "~/components/inputs/IconButton";
import { TextEditor } from "~/components/inputs/TextEditor";
import { Flexbox } from "~/components/layout/Flexbox";
import { PageWrapper } from "~/components/layout/PageWrapper";
import { MessagesList } from "~/components/messages/MessagesList";
import { MessagesSidebar } from "~/components/messages/MessagesSidebar/MessagesSidebar";

const groups = {
  classes: [
    {
      type: "class",
      id: "123",
      name: "English",
      latestMessage: {
        from: "Colton Travers",
        message: "This is a message here.",
      },
    },
    {
      type: "class",
      id: "124",
      name: "Math",
      latestMessage: {
        from: "Colton Travers",
        message: "This is a message here.",
      },
    },
    {
      type: "class",
      id: "125",
      name: "Science",
      latestMessage: {
        from: "Colton Travers",
        message: "This is a message here.",
      },
    },
  ],
  groups: [
    {
      type: "group",
      id: "126",
      name: "Group 1",
      latestMessage: {
        from: "Colton Travers",
        message: "This is a message here.",
      },
    },
    {
      type: "group",
      id: "127",
      name: "Group 2",
      latestMessage: {
        from: "Colton Travers",
        message: "This is a message here.",
      },
    },
    {
      type: "group",
      id: "128",
      name: "Group 3",
      latestMessage: {
        from: "Colton Travers",
        message: "This is a message here.",
      },
    },
  ],
  direct: [
    {
      type: "direct",
      id: "129",
      name: "Mrs. Stevenson",
      latestMessage: {
        from: "Colton Travers",
        message: "This is a message here.",
      },
    },
    {
      type: "direct",
      id: "130",
      name: "Math",
      latestMessage: {
        from: "Colton Travers",
        message: "This is a message here.",
      },
    },
    {
      type: "direct",
      id: "131",
      name: "Science",
      latestMessage: {
        from: "Colton Travers",
        message: "This is a message here.",
      },
    },
  ],
};

export default function Messages() {
  // const {} = useGetMessageGroups({ user: "123" }, {});
  const [selectedGroup, setSelectedGroup] = useState<string | null>(
    groups.classes[0].id
  );

  const handleGroupChange = (id: string) => {
    setSelectedGroup(id);
  };

  return (
    <PageWrapper padding={0} fullHeight>
      <Flexbox className={tw`overflow-auto`}>
        <MessagesSidebar
          selectedGroup={selectedGroup}
          groups={groups}
          onGroupChange={handleGroupChange}
        />
        {selectedGroup && (
          <Flexbox direction="column" className={tw`flex-1`}>
            <IconButton
              icon="akar-icons:arrow-left"
              onClick={() => setSelectedGroup(null)}
              className={tw`self-start lg:hidden`}
            ></IconButton>
            <MessagesList selectedGroup={selectedGroup} />
            <TextEditor className={tw`m-3`} />
          </Flexbox>
        )}
      </Flexbox>
    </PageWrapper>
  );
}
