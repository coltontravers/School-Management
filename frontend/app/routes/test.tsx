import { css, tw } from "twind/css";
import { PageWrapper } from "~/components/layout/PageWrapper";
import { TeacherTest } from "~/components/test/TeacherTest";
import { Role } from "~/types";

const generateTestComponent = (role: Role) => {
  switch (role) {
    case "teacher":
      return <TeacherTest />;

    default:
      return <TeacherTest />;
  }
};

export default function Test() {
  const role: Role = "teacher";

  return (
    <PageWrapper hideHeader padding={0} fullHeight>
      {generateTestComponent(role)}
    </PageWrapper>
  );
}
