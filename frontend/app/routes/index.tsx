import { css, tw } from "twind/css";
import { Dropdown } from "~/components/Dropdown";
import { Button } from "~/components/inputs/Button";
import { TextInput } from "~/components/inputs/TextInput";
import { PageWrapper } from "~/components/layout/PageWrapper";

export default function Index() {
  return (
    <PageWrapper>
      <Button variant="solid" tone="danger">
        Test button
      </Button>
      {/* <Dropdown /> */}
      <TextInput label="test" />
    </PageWrapper>
  );
}
