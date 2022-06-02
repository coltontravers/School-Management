import React from "react";
import ReactSelect, { SingleValue } from "react-select";
import { apply, css, tw } from "twind/css";

type Option = {
  value: any;
  label: string | number;
};

interface SelectProps {
  options: Option[];
  id?: string;
  label?: string;
  defaultValue?: Option;
  minWidth?: string;
  onChange?: (val: SingleValue<Option>) => void;
  className?: string;
}

const defaultOptions: Option[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const selectStyles = css`
  .select__control {
    ${apply`border-2 border-gray-300 shadow-none`}
  }

  .select__control--is-focused,
  .select__control--is-focused:hover {
    ${apply`border-primary-main!`}
  }

  .select__input-container {
    ${apply`py-1`}
  }

  .select__option:hover {
    ${apply`bg-primary-100`}
  }

  .select__option--is-selected:not(&:hover) {
    ${apply`bg-primary-main`}
  }
`;

export const Select = ({
  options = defaultOptions,
  defaultValue,
  id,
  label,
  minWidth = "120px",
  onChange = (changed) => {
    console.log("Changed: ", changed);
  },
  className,
}: SelectProps) => {
  return (
    <div className={tw(className)}>
      <label
        htmlFor={id}
        className={tw(`transition-all duration-150 text-gray-400 text-body2`)}
      >
        {label}
      </label>
      <ReactSelect<Option>
        defaultValue={defaultValue}
        id={id}
        name={id}
        options={options}
        //   styles={{ control: (styles) => ({ ...styles, border: "none" }) }}
        classNamePrefix="select"
        className={tw(`min-w-[${minWidth}]`, selectStyles, className)}
        onChange={onChange}
        //   defaultInputValue={defaultInputValue}
      />
    </div>
  );
};
