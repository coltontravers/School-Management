import React from "react";
import { Flexbox } from "~/components/layout/Flexbox";
import { Text } from "~/components/Text";
import { Select } from "~/components/inputs/Select";
import { SearchInput } from "~/components/inputs/SearchInput";
import { Button } from "~/components/inputs/Button";
import { tw } from "twind/css";
import { Icon } from "@iconify/react";
import { Dropdown, DropdownItem } from "~/components/Dropdown";

interface ResourceSelectorProps {}

const filesOptions = [
  {
    value: "all",
    label: "All Library Files",
  },
];

const recentOptions = [
  {
    value: "date-created",
    label: "Date created",
  },
  {
    value: "date-modified",
    label: "Date modified",
  },
];

export const ResourceSelector = (props: ResourceSelectorProps) => {
  return (
    <Flexbox gap={3} direction="column">
      <Flexbox alignItems="center" justifyContent="spaceBetween">
        <Text weight="bold">Resources</Text>
        <Dropdown
          label="Add new"
          icon="carbon:upload"
          variant="ghost"
          size="small"
        >
          <DropdownItem>File</DropdownItem>
          <DropdownItem>Link</DropdownItem>
        </Dropdown>
      </Flexbox>
      <Flexbox gap={3} alignItems="end">
        <Select
          options={filesOptions}
          defaultValue={filesOptions[0]}
          className={tw`w-18`}
          id="file-type"
          label="File type"
        />
        <Select
          options={recentOptions}
          defaultValue={recentOptions[0]}
          className={tw`w-18`}
          id="sort"
          label="Sort by"
        />
        <SearchInput id="search-resources" placeholder="Search..." />
      </Flexbox>
      <div>
        <Flexbox gap={3} className={tw`py-2 border-b border-gray-300`}>
          <File selected />
        </Flexbox>
        <Flexbox gap={3} className={tw`py-2`}>
          <File />
          <File />
          <File />
        </Flexbox>
      </div>
      <Flexbox justifyContent="end" gap={3}>
        <Button variant="ghost">Cancel</Button>
        <Button>Save</Button>
      </Flexbox>
    </Flexbox>
  );
};

const File = ({ selected }: { selected?: boolean }) => {
  return (
    <div
      className={tw`h-10 w-10 bg-primary-main relative rounded cursor-pointer`}
    >
      {selected && (
        <div className={tw`absolute right-0 -top-2`}>
          <Icon
            icon="akar-icons:check"
            className={tw`text-success-main text-h4`}
          />
        </div>
      )}
    </div>
  );
};
