import dayjs, { Dayjs } from "dayjs";
import { ReactNode } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { css, tw } from "twind/css";
import { faker } from "@faker-js/faker";
import { CircularProgressBar } from "~/components/CircularProgressBar";
import { ClassCard } from "~/components/class/ClassCard";
import { GradeCircularProgressBar } from "~/components/grade/GradeCircularProgressBar";
import { PageSection } from "~/components/layout/PageSection";
import { Flexbox } from "~/components/layout/Flexbox";
import { PageWrapper } from "~/components/layout/PageWrapper";
import { Text } from "~/components/Text";
import { GradeCard } from "~/components/grade/GradeCard";
import { CalendarWidget } from "~/components/CalendarWidget";
import { Button } from "~/components/inputs/Button";
import { AssignmentCard } from "~/components/assignment/AssignmentCard";

interface StudentDashboardProps {}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Avg grade",
      data: [80, 85, 94, 90, 96, 94, 92, 90],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const StudentDashboard = (props: StudentDashboardProps) => {
  return (
    <PageWrapper padding={3}>
      <Flexbox>
        <div
          className={tw`flex-1 grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-3`}
        >
          <PageSection name="Recent assignments">
            <div
              className={tw(
                `grid gap-2 flex-1`,
                css`
                  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                  grid-auto-rows: max-content;
                `
              )}
            >
              <AssignmentCard
                name="English test"
                subject="English"
                date={dayjs()}
                progress={90}
                className={tw`min-w-[250px]`}
              />
              <AssignmentCard
                name="English test"
                subject="English"
                date={dayjs()}
                progress={90}
                className={tw`min-w-[250px]`}
              />
              <AssignmentCard
                name="English test"
                subject="English"
                date={dayjs()}
                progress={90}
                className={tw`min-w-[250px]`}
              />
              <AssignmentCard
                name="English test"
                subject="English"
                date={dayjs()}
                progress={90}
                className={tw`min-w-[250px]`}
              />
            </div>

            <Button variant="ghost" className={tw`self-end`}>
              View all
            </Button>
          </PageSection>
          <PageSection name="Recent grades">
            <Flexbox gap={2} direction="column" flex="1">
              <GradeCard
                teacher="Mrs. Sunderland"
                className="English"
                grade={86}
                title="Math Test"
                dateCompleted={dayjs()}
              />
              <GradeCard
                teacher="Mrs. Sunderland"
                className="English"
                grade={86}
                title="Math Test"
                dateCompleted={dayjs()}
              />
              <GradeCard
                teacher="Mrs. Sunderland"
                className="English"
                grade={86}
                title="Math Test"
                dateCompleted={dayjs()}
              />
            </Flexbox>

            <Button variant="ghost" className={tw`self-end`}>
              View all
            </Button>
          </PageSection>
          <PageSection name="Your classes">
            <Flexbox direction="column" gap={2}>
              <ClassCard
                teacher="Mrs. Sunderland"
                className="English"
                time={dayjs()}
                grade={86}
              />
              <ClassCard
                teacher="Mrs. Sunderland"
                className="English"
                time={dayjs()}
                grade={86}
              />
              <ClassCard
                teacher="Mrs. Sunderland"
                className="English"
                time={dayjs()}
                grade={86}
              />
            </Flexbox>

            <Button variant="ghost" className={tw`self-end`}>
              View all
            </Button>
          </PageSection>
          <PageSection name="Performance">
            <Flexbox direction="column">
              <Text className={tw`self-end`}>3.4 GPA</Text>
              <Line options={options} data={data} />
            </Flexbox>
          </PageSection>
        </div>
        <div className={tw`px-3 hidden md:block`}>
          <CalendarWidget />
        </div>
      </Flexbox>
    </PageWrapper>
  );
};
