import dayjs from "dayjs";
import React from "react";

interface DailyCalendarProps {}

export const DailyCalendar = (props: DailyCalendarProps) => {
  const firstDayToShow = dayjs().startOf("week");
  const lastDayToShow = dayjs().endOf("week");
  const daysToShow = lastDayToShow.diff(firstDayToShow, "days") + 1;

  const days = [...Array(daysToShow)].map((_, i) =>
    firstDayToShow.add(i, "day")
  );

  return <div>Daily Calendar</div>;
};
