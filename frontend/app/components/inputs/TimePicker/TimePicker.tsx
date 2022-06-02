import React, { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { apply, css, tw } from "twind/css";
import { TextInput } from "~/components/inputs/TextInput";

type TimePickerProps = {
  label?: string;
  defaultTime?: string;
  className?: string;
};

const classes = css`
  .react-datepicker-popper {
    width: 200px;
    ${apply`mt-2 border border-gray-400 rounded shadow-normalMd bg-white z-10`}
  }

  .react-datepicker__time-list {
    height: 200px;
    overflow: auto;
  }

  .react-datepicker__time-list-item {
    ${apply`p-2 cursor-pointer`}
  }

  .react-datepicker__time-list-item--selected {
    ${apply`bg-primary-main text-white`}
  }

  .react-datepicker-time__header {
    display: none;
  }

  .react-datepicker__input-time-container {
    display: none;
  }
`;

export const TimePicker = ({
  label = "Select a time",
  className,
}: TimePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>();

  const CustomInput = forwardRef<HTMLInputElement>(
    ({ value, onClick }: React.HTMLProps<HTMLInputElement>, ref) => (
      <TextInput
        forwardedRef={ref}
        onClick={onClick}
        defaultValue={value}
        label={label}
        icon="akar-icons:clock"
        fullWidth
      />
    )
  );

  return (
    <div className={tw(classes, className)}>
      <ReactDatePicker
        selected={startDate}
        customInput={<CustomInput />}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        showTimeInput
        timeIntervals={30}
        dateFormat="h:mm aa"
      />
    </div>
  );
};
