import { forwardRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { css, apply, tw } from "twind/css";
import ReactDatePicker from "react-datepicker";
import { TextInput } from "~/components/inputs/TextInput";
import { Icon } from "@iconify/react";
import { Select } from "~/components/inputs/Select";

interface DatePickerProps {
  enableYear?: boolean;
  enableMonth?: boolean;
  label?: string | null;
  placeholder?: string;
  hasLabel?: boolean;
  onChange?: (date: Dayjs) => void;
  defaultDate?: string;
  className?: string;
}

const classes = css`
  .react-datepicker-popper {
    z-index: 9999;
  }
  .react-datepicker {
    ${apply`rounded shadow-normalMd border border-gray-400 mt-1 px-1 bg-white z-50`}
  }
  .react-datepicker__day-names {
    ${apply`flex`}
  }

  .react-datepicker__day-name {
    ${apply`flex justify-center items-center content-center flex-1`}
  }

  .react-datepicker__week {
    ${apply`flex space-between`}
  }

  .react-datepicker__day {
    cursor: pointer;
    height: 35px;
    width: 35px;
    border-radius: 50px;
    ${apply`flex justify-center items-center`}
  }

  .react-datepicker__day--selected {
    ${apply`bg-primary-500 text-white`};
  }
`;

const selectStyles = css`
  .select__control {
    ${apply`border-none`}
  }

  .select__indicator-separator {
    display: none;
  }

  .select__input-container {
    padding: 0;
  }
`;

export const DatePicker = ({
  label = "Select a date",
  placeholder,
  onChange = () => {},
  className,
}: DatePickerProps) => {
  const [startDate, setStartDate] = useState(!placeholder ? new Date() : null);

  const yearsDuration = dayjs().diff(dayjs("1900"), "years");
  const years = Array.from(Array(yearsDuration! + 1), (_, i) => ({
    value: 1900 + i,
    label: 1900 + i,
  }));
  const months = [
    { value: 0, label: "January" },
    { value: 1, label: "February" },
    { value: 2, label: "March" },
    { value: 3, label: "April" },
    { value: 4, label: "May" },
    { value: 5, label: "June" },
    { value: 6, label: "July" },
    { value: 7, label: "August" },
    { value: 8, label: "September" },
    { value: 9, label: "October" },
    { value: 10, label: "November" },
    { value: 11, label: "December" },
  ];

  const Input = forwardRef<HTMLInputElement>(
    ({ value, onClick }: React.HTMLProps<HTMLInputElement>, ref) => (
      <TextInput
        label={label}
        forwardedRef={ref}
        onClick={onClick}
        defaultValue={value}
        icon="akar-icons:calendar"
        fullWidth
        placeholder={placeholder}
      />
    )
  );

  return (
    <div className={tw(classes, className)}>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => {
          const newDate = date ?? startDate;
          onChange(dayjs(newDate));
          setStartDate(newDate);
        }}
        customInput={<Input />}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          return (
            <div className={tw`flex gap-2 justify-between m-2 bg-white`}>
              <div className={tw`flex-1`}>
                <Select
                  className={tw(selectStyles)}
                  options={months}
                  defaultValue={months.find(
                    (month) => month.value === date.getMonth()
                  )}
                  onChange={(val) => {
                    changeMonth(Number(val?.value));
                  }}
                />
                <Select
                  className={tw(selectStyles)}
                  options={years}
                  defaultValue={years.find(
                    (year) => year.value === date.getFullYear()
                  )}
                  onChange={(val) => changeYear(Number(val?.value))}
                />
              </div>

              <div className={tw`flex gap-2`}>
                <button
                  className={tw`focus:outline-none`}
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <Icon icon="akar-icons:arrow-left" height="25px" />
                </button>
                <button
                  className={tw`focus:outline-none`}
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <Icon icon="akar-icons:arrow-right" height="25px" />
                </button>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};
