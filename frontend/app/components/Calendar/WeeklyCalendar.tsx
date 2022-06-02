import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import React from "react";
import { tw } from "twind/css";
import { Flexbox } from "../layout/Flexbox";
import { Text } from "../Text";
import { Event } from "./Calendar";

interface WeeklyCalendarProps {
  selectedDate: Dayjs;
  events: Event[];
}

dayjs.extend(duration);

export const WeeklyCalendar = ({
  selectedDate,
  events,
}: WeeklyCalendarProps) => {
  const firstDayToShow = dayjs(selectedDate).startOf("week");
  const lastDayToShow = dayjs(selectedDate).endOf("week");
  const daysToShow = lastDayToShow.diff(firstDayToShow, "days") + 1;
  const days = [...Array(daysToShow)].map((_, i) =>
    firstDayToShow.add(i, "day")
  );
  // Create array of 30 min intervals in the day
  const times = [...Array(48).keys()].map((_, i) =>
    dayjs()
      .startOf("day")
      .add(i * 30, "minutes")
  );

  console.log({
    thing: dayjs().diff(dayjs().startOf("day"), "minutes"),
    days,
    events,
  });

  return (
    <Flexbox>
      <div className={tw`mt-4`}>
        {times.map((date, i) => (
          <div key={`time-${i}`} className={tw`py-2 h-[50px]`}>
            <Text className={tw`whitespace-nowrap`}>
              {date.format("h:mm a")}
            </Text>
          </div>
        ))}
      </div>
      <div className={tw`w-full flex flex-col`}>
        <Flexbox fullWidth>
          {days.map((day) => (
            <button
              className={tw`appearance-none px-2 flex-1 whitespace-nowrap focus:outline-none`}
            >
              {day.format("ddd D")}
            </button>
          ))}
        </Flexbox>
        <Flexbox className={tw`flex-1`}>
          {/* Need to figure out how to sort/filter the events to each day, and then absolute position from the top based on the time of day. Would the equation be calc(x(where x is minutes since midnight)px - 10px) */}
          {days.map((dayOfWeek) => (
            <div className={tw`flex-1 relative border-r border-r-gray-300`}>
              {events.map((event) => {
                if (dayjs(event.from).isSame(dayOfWeek, "day")) {
                  const minsPassed = event.from
                    .startOf("day")
                    .diff(dayjs(), "minutes");
                  console.log({ minsPassed });
                  return <div>{event.from.format("dddd h:mm")}</div>;
                }
                // console.log(event.from.startOf("day").diff(dayjs(), "hours"));
                // return (
                //   dayjs(event.from).isSame(dayOfWeek, "day") && (
                //     <div>{event.from.format("dddd h:mm")}</div>
                //   )
                // );
              })}
            </div>
          ))}
        </Flexbox>
      </div>
    </Flexbox>
  );
};
