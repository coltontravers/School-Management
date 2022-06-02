import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { css, tw } from "twind/css";
import { useWindowSize } from "~/hooks/useWindowSize";
import { Flexbox } from "../layout/Flexbox";
import { Text } from "../Text";
import { MonthlyCalendar } from "./MonthlyCalendar";
import { WeeklyCalendar } from "./WeeklyCalendar";
import { DailyCalendar } from "./DailyCalendar";
import { DatePicker } from "../inputs/DatePicker";
import { IconButton } from "../inputs/IconButton";
import { Select } from "../inputs/Select";
import { Modal } from "../Modal/Modal";
import { ModalFooter } from "../Modal/ModalFooter";
import { Button } from "../inputs/Button";
import { Event } from "./CalendarEvent";
import { CalendarEventModal } from "./CalendarEventModal";

type View = "month" | "week" | "day";

interface CalendarProps {
  view?: View;
}

const viewMap = {
  day: DailyCalendar,
  week: WeeklyCalendar,
  month: MonthlyCalendar,
};

const views = [
  {
    value: "month",
    label: "Month",
  },
  {
    value: "week",
    label: "Week",
  },
  {
    value: "day",
    label: "Day",
  },
];

const items = [
  {
    value: "all",
    label: "All items",
  },
];

const events: Event[] = [
  {
    from: dayjs().add(1, "hour"),
    to: dayjs().add(2, "hour"),
    title: "Test title",
    description: "This is the description for the event",
    class: "English",
  },
  {
    from: dayjs().add(2, "hour"),
    to: dayjs().add(3, "hour"),
    title: "Test title",
    description: "This is the description for the event",
    class: "English",
  },
  {
    from: dayjs().add(3, "hour"),
    to: dayjs().add(4, "hour"),
    title: "Test title",
    description: "This is the description for the event",
    class: "English",
  },
  {
    from: dayjs().add(1, "day"),
    to: dayjs().add(1, "day").add(2, "hour"),
    title: "Test title",
    description: "This is the description for the event",
    class: "Math",
  },
  {
    from: dayjs().add(3, "day"),
    to: dayjs().add(3, "day").add(2, "hour"),
    title: "Test title",
    description: "This is the description for the event",
    class: "Science",
  },
];

export const Calendar = ({ view = "month" }: CalendarProps) => {
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [calendarView, setCalendarView] = useState<View>(view);
  const windowSize = useWindowSize();

  const handleChangeDate = ({ value }: { value: "subtract" | "add" }) => {
    value === "add"
      ? setSelectedDate(dayjs(selectedDate).add(1, calendarView))
      : setSelectedDate(dayjs(selectedDate).subtract(1, calendarView));
  };

  useEffect(() => {
    if (windowSize.width && windowSize.width <= 768 && calendarView !== "day") {
      setCalendarView("day");
    }
  }, [windowSize]);

  const CalendarComponent = viewMap[calendarView];

  return (
    <div>
      <Flexbox justifyContent="spaceBetween" wrap="wrap">
        <Flexbox alignItems="center" className={tw`py-3`}>
          <IconButton
            icon="akar-icons:arrow-left"
            onClick={() => handleChangeDate({ value: "subtract" })}
          />
          <Text size="h5" className={tw`w-17 text-center`}>
            {selectedDate.format("MMMM YYYY")}
          </Text>
          <IconButton
            icon="akar-icons:arrow-right"
            onClick={() => handleChangeDate({ value: "add" })}
          />
        </Flexbox>
        <Flexbox alignItems="center" gap={3} className={tw`py-2`}>
          <Select
            options={items}
            defaultValue={items[0]}
            className={tw`w-16`}
          />
          <Select
            options={views}
            defaultValue={views[0]}
            onChange={(newView) => setCalendarView(newView?.value)}
            className={tw`hidden w-16 md:block`}
          />
          <DatePicker
            label={null}
            placeholder="Select a date"
            onChange={(date) => setSelectedDate(date)}
          />
          <IconButton
            icon="akar-icons:plus"
            onClick={() => {
              setEventModalOpen(true);
            }}
          />
        </Flexbox>
      </Flexbox>
      <div className={tw`w-full`}>
        <CalendarComponent
          selectedDate={selectedDate}
          events={events}
          onEventSelect={(event) => {
            setSelectedEvent(event);
            setEventModalOpen(true);
          }}
        />
      </div>
      <CalendarEventModal
        open={eventModalOpen}
        title={selectedEvent?.title ?? "New Event"}
        onClose={() => {
          setEventModalOpen(false);
          setSelectedEvent(null);
        }}
      />
    </div>
  );
};
