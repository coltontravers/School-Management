import { Icon } from "@iconify/react";
import React from "react";
import { css, tw } from "twind/css";
import { Text } from "~/components/Text";
import { FileType } from "~/types/library";

interface LibraryCardProps {
  type: FileType;
  title: string;
  thumbnail?: string;
}

const fileTypeImageMap: { [type in FileType]: string } = {
  folder: "akar-icons:folder",
  image: "akar-icons:image",
  video: "akar-icons:video",
  document: "akar-icons:file",
};

export const LibraryCard = ({ type, title, thumbnail }: LibraryCardProps) => {
  return (
    <a href="">
      <div
        className={tw(
          `flex-1 min-w-[150px] bg-gray-100 p-2 border border-gray-100 rounded text-center transition-all duration-100 hover:bg-primary-100 hover:border-primary-300`
        )}
      >
        <div className={tw(`h-12 px-2`, { "!px-6": !thumbnail })}>
          {thumbnail ? (
            <img src={thumbnail} className={tw`h-full m-auto`} />
          ) : (
            <Icon icon={fileTypeImageMap[type]} className={tw`w-full h-full`} />
          )}
        </div>
        <Text weight="bold" display="block" truncate>
          {title}
        </Text>
        <Text size="caption" color="gray.400" className="hidden xl:block">
          8/22/24 10:04 AM
        </Text>
      </div>
    </a>
  );
};
