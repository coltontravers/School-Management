import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { tw, css } from "twind/css";
import { Text } from "~/components/Text";
import { CalendarEvent, Event } from "./CalendarEvent";

interface MonthlyCalendarProps {
  selectedDate: Dayjs;
  events: Event[];
  onEventSelect: (event: Event) => void;
}

export const MonthlyCalendar = ({
  selectedDate,
  events,
  onEventSelect,
}: MonthlyCalendarProps) => {
  const firstDayToShow = dayjs(selectedDate).startOf("month").startOf("week");
  const lastDayToShow = dayjs(selectedDate).endOf("month").endOf("week");
  const daysToShow = lastDayToShow.diff(firstDayToShow, "days") + 1;

  const days = [...Array(daysToShow)].map((_, i) =>
    firstDayToShow.add(i, "day")
  );

  return (
    <div
      className={tw(
        `grid grid-cols-1 md:grid-cols-7`,
        css`
          grid-auto-rows: minmax(165px, 1fr);
        `
      )}
    >
      {days.map((day, i) => {
        return (
          <div
            className={tw`flex flex-1 flex-row md:flex-col border border-gray-300`}
          >
            <Text
              weight="bold"
              className={tw(
                `w-5 px-1 md:self-end sticky top-0 md:relative`,
                css`
                  height: fit-content;
                `
              )}
            >
              {day.format("D")}
            </Text>
            <div
              className={tw`grid w-full grid gap-1 grid-cols-1 2xl:grid-cols-2 p-1`}
            >
              {/* Have it limit the amount it will show if on a view other than daily. Then clicking "X more" button will load the daily view for that day. 
                  I also want to limit it to only have 2 rows visible.
              */}
              {events.map(
                (event) =>
                  dayjs(event.from).isSame(day, "day") && (
                    <CalendarEvent {...event} onSelect={onEventSelect} />
                  )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
