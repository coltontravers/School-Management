import { css, tw } from "twind/css";
import { Dropdown } from "~/components/Dropdown";
import { Button } from "~/components/inputs/Button";
import { TextInput } from "~/components/inputs/TextInput";
import { PageWrapper } from "~/components/layout/PageWrapper";
import { Calendar as CalendarComponent } from "~/components/Calendar";
import { Flexbox } from "~/components/layout/Flexbox";
import { Select } from "~/components/inputs/Select";
import { DatePicker } from "~/components/inputs/DatePicker";
import { Text } from "~/components/Text";
import { Icon } from "@iconify/react";
import { IconButton } from "~/components/inputs/IconButton";

export default function Calendar() {
  return (
    <PageWrapper>
      <CalendarComponent />
    </PageWrapper>
  );
}
