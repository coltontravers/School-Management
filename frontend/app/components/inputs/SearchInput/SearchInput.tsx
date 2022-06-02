import { Icon } from "@iconify/react";
import React from "react";
import { tw } from "twind/css";
import { IconButton } from "~/components/inputs/IconButton/IconButton";
import { TextInput, TextInputProps } from "~/components/inputs/TextInput";

type SearchInputProps = Pick<
  TextInputProps,
  "label" | "id" | "placeholder" | "fullWidth"
>;

export const SearchInput = (props: SearchInputProps) => {
  return <TextInput icon="ant-design:search-outlined" {...props} />;
};
