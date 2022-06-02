import dayjs from "dayjs";
import { useState } from "react";
import { tw, css } from "twind/css";
import { Flexbox } from "../layout/Flexbox";
import { CalendarWidgetEvent } from "./CalendarWidgetEvent";

interface CalendarWidgetProps {}

export const CalendarWidget = (props: CalendarWidgetProps) => {
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const firstDayToShow = dayjs().startOf("month").startOf("week");
  const lastDayToShow = dayjs().endOf("month").endOf("week");
  const daysToShow = lastDayToShow.diff(firstDayToShow, "days") + 1;

  const days = [...Array(daysToShow)].map((_, i) =>
    firstDayToShow.add(i, "day")
  );

  return (
    <div>
      <div
        className={tw(
          `grid grid-cols-1 md:grid-cols-7 border-b border-gray-200`,
          css`
            grid-auto-rows: minmax(50px, 1fr);
          `
        )}
      >
        {days.map((day, i) => {
          return (
            <div className={tw`p-1 flex items-center justify-center`}>
              <button
                className={tw(
                  `rounded-full w-5 h-5 flex justify-center items-center`,
                  {
                    "bg-primary-main text-white": selectedDay.isSame(
                      day,
                      "day"
                    ),
                  }
                )}
                onClick={() => setSelectedDay(day)}
              >
                {day.format("D")}
              </button>
            </div>
          );
        })}
      </div>
      <Flexbox className={tw`py-2`} gap={3} direction="column">
        <CalendarWidgetEvent name="English test" date={dayjs()} />
        <CalendarWidgetEvent name="English test" date={dayjs()} />
      </Flexbox>
    </div>
  );
};
